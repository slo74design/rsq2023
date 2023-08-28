import { client } from "@/lib/apollo";
import { gql } from "@apollo/client";

export async function getAllCats() {
    try {
        const arrServices = [];

        const GET_ALL_CATS = gql`
            query GetAllCats {
                categories {
                    nodes {
                        name
                        uri
                        databaseId
                        count
                    }
                }
            }
        `;

        const responseServices = await client.query({
            query: GET_ALL_CATS,
        });

        const apiServices = responseServices?.data?.categories?.nodes;

        apiServices.map((item) => {
            if (item) {
                arrServices.push({
                    cId: item.databaseId,
                    cTitle: item.name,
                    cUri: item.uri,
                    cCount: item.count,
                });
            }
        });

        arrServices.sort((a, b) => a.pId - b.pId);

        return arrServices;
    } catch (error) {
        console.log(error);
    }
}
