export const titleCrop = (title: string, charLength: number) => {
    return title.length < charLength ? title : title.slice(0, charLength) + "...";
}