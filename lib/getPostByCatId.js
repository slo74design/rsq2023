import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";

export async function getPostsByCatId(idCat) {
    const arrServices = [];
    try {
        const GET_POSTS_BYCATID = gql`
            query GetPostsByCat($id: Int = ${idCat}) {
                posts(where: { status: PUBLISH, categoryId: $id }) {
                    nodes {
                        status
                        slug
                        title
                        uri
                        dateGmt
                        excerpt
                        databaseId
                        tipoPost {
                            clasificacionForm
                            tituloLargo
                            tituloCta
                        }
                        categories {
                            nodes {
                                name
                                slug
                                categoryId
                            }
                        }
                    }
                }
            }
        `;
        const responseServices = await client.query({
            query: GET_POSTS_BYCATID,
            variables: { catId: idCat },
        });

        const apiServices = responseServices?.data?.posts?.nodes;

        apiServices.map((item) => {
            if (item) {
                arrServices.push({
                    pId: item.databaseId,
                    pTitle: item.tipoPost?.tituloLargo,
                    pUri: item.uri,
                    pDate: item.dateGmt,
                    pExcerpt: item.excerpt,
                    pType: item.tipoPost?.clasificacionForm, // postLayout para determinar el formato del post
                    pCta: item.tipoPost?.tituloCta,
                    pCatId: item.categories?.nodes[0]?.categoryId,
                    pCatSlug: item.categories?.nodes[0]?.slug,
                });
            }
        });

        arrServices.sort((a, b) => a.pId - b.pId);

        return arrServices;
    } catch (error) {
        console.log(error);
    }
}
