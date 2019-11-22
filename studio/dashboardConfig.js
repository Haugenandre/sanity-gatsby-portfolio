export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dd8693e16886701fc8b5ba7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jismseda',
                  apiId: 'aaa324bb-ebe9-4e28-8a68-e9c80c1a2dfe'
                },
                {
                  buildHookId: '5dd8693e94a94401e3f07a97',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-eqe9gphm',
                  apiId: 'b2f64702-9bb4-447a-91cb-aebb4366696d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Haugenandre/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-eqe9gphm.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
