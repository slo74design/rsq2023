import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
} from "@apollo/client";

const link = ApolloLink.from([
    new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/rsq`,
        useGETForQueries: true,
    }),
]);

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy: "network-only",
        },
    },
});
