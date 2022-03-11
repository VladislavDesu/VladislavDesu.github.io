module.exports = {
    siteMetadata: {
        title: "Portfolio",
        siteUrl: "https://www.yourdomain.tld"
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                "icon": "src/assets/images/icons/favicon.svg"
            }
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /inline/
                }
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                "name": "images",
                "path": "./src/assets/images/"
            },
            __key: "images"
        }]
};