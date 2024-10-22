export interface simpleBlogCard {
    title:string,
    smallDescription:string,
    currentSlug:string,
    titleImage:any,
}
export interface fullBlog extends simpleBlogCard{
   content:any
}
