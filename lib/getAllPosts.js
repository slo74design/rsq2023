import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";

export async function getAllPosts() {
    try {
        const arrServices = [];

        const GET_FIVE_POSTS = gql`
            query GetAllPosts {
                posts(
                    where: {
                        status: PUBLISH
                        orderby: { order: DESC, field: DATE }
                    }
                    first: 5
                ) {
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
                    }
                }
            }
        `;

        const responseServices = await client.query({
            query: GET_FIVE_POSTS,
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
                });
            }
        });

        arrServices.sort((a, b) => a.pId - b.pId);

        return arrServices;
    } catch (error) {
        console.log(error);
    }
}
