import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";

export async function getPostByUri(uriString) {
    try {
        const GET_POST_BYURI = gql`
            query GetPostByUri($id: ID!) {
                post(id: $id, idType: URI) {
                    databaseId
                    title
                    uri
                    dateGmt
                    isSticky
                    excerpt
                    content
                    categories {
                        nodes {
                            name
                            uri
                            databaseId
                        }
                    }
                    seo {
                        canonicalUrl
                        description
                        focusKeywords
                        title
                        jsonLd {
                            raw
                        }
                    }
                    tipoPost {
                        clasificacionForm
                        tituloLargo
                        tituloCta
                    }
                }
            }
        `;
        const response = await client.query({
            query: GET_POST_BYURI,
            variables: { id: uriString },
        });
        const apiPost = response?.data?.post;

        const resPostObj = {
            pId: apiPost.databaseId,
            pTitle: apiPost.title,
            pUri: apiPost.uri,
            pSticky: apiPost.isSticky,
            pDate: apiPost.dateGmt,
            pExcerpt: apiPost.excerpt,
            pContent: apiPost.content,
            pType: apiPost.tipoPost?.clasificacionForm, // postLayout para determinar el formato del post
            pTituloLargo: apiPost.tipoPost?.tituloLargo, // tituloLargo a visualizar en el Frontend
            pTituloCTA: apiPost.tipoPost?.tituloCta, // tituloCTA a visualizar en el Frontend
            pCategoryName: apiPost.categories?.nodes[0]?.name,
            pCategoryId: apiPost.categories?.nodes[0]?.databaseId,
            pCategoryUri: apiPost.categories?.nodes[0]?.uri,
            pSeoCanonicalUrl: apiPost.seo?.canonicalUrl,
            pSeoDescription: apiPost.seo?.description,
            pSeoFocusKeywords: apiPost.seo?.focusKeywords,
            pSeoTitle: apiPost.seo?.title,
            pSeoJsonLd: apiPost.seo?.jsonLd.raw,
        };

        return resPostObj;
    } catch (error) {
        console.log(error);
    }
}
