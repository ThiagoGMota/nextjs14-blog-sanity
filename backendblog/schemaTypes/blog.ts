export default{
    name:'blog',
    type:'document',
    title:'Blog',
    fields: [
        {
            name:'title',
            type:'string',
            title:'Title do artigo'
        },
        {
            name:'slug',
            type:'slug',
            title:'Slug do artigo',
            options:{
                source:'title'
            }
        },
        {
            name:'titleImage',
            type:'image',
            title:'Title image'
        },
        {
            name:'smallDescription',
            type:'text',
            title:'Descrição curta'
        },
        {
            name:'content',
            type:'array',
            title:'Conteudo',
            of:[
                {
                    type:'block',
                }
            ]
        }
    ]
}