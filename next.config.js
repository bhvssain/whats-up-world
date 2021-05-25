module.exports = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/EU",
                permanent: true,
            },
        ];
    },
}
