export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e05a73de0f80a136b286a60',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4zovbcaa',
                  apiId: 'c953ce32-bbc1-4dd9-82fb-4f7f57e72d90'
                },
                {
                  buildHookId: '5e05a73de9ce84a4182ae232',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-kbbhsi52',
                  apiId: '8392cb15-b0f7-428d-b3c0-f123da4e6ede'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gagsy/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-kbbhsi52.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
