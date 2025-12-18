export const getPageNumbers = (page: number, allPages: number) => {
    const pages: (number | string)[] = [];

    pages.push(1);

    if (page > 3) {
        pages.push("...");
    }

    for (let i = page - 1; i <= page + 1; i++) {
        if (i <= 1 || i >= allPages) {
            continue;
        }
        pages.push(i);
    }

    if (page < allPages - 2) {
        pages.push("...");
    }

    const nextSectionEnd = Math.ceil(page / 9) * 10;
    
    if (nextSectionEnd > page && nextSectionEnd <= allPages) {
        pages.push(nextSectionEnd);
    }

    return pages;
};