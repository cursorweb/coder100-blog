import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import showdown from "showdown";

const converter = new showdown.Converter({
    tables: true,
    underline: true,
    omitExtraWLInCodeBlocks: true,
    strikethrough: true,
    simpleLineBreaks: true
});


const postsDirectory = path.join(process.cwd(), "src", "posts");

export interface BlogType {
    title: string,
    date: number,
    bio: string,
    url: string
}

export function getBlogs(): BlogType[] {
    const files = fs.readdirSync(postsDirectory);
    const data = files.map(file => {
        const url = file.replace(/\.md$/, "");

        const filePath = path.join(postsDirectory, file);
        const fileContents = fs.readFileSync(filePath, "utf8");

        const matterResult = matter(fileContents) as GrayMatterFile<string> & {
            data: {
                title: string,
                date: number,
                bio: string
            }
        };

        return {
            url,
            ...matterResult.data
        };
    });

    return data.sort((a, b) => b.date - a.date);
}

export function getPaths() {
    const files = fs.readdirSync(postsDirectory);

    return files.map(file => {
        return {
            params: {
                title: file.replace(/\.md$/, "")
            }
        };
    });
}

export function getBlog(name: string) {
    const filePath = path.join(postsDirectory, `${name}.md`);
    const contents = fs.readFileSync(filePath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(contents);

    // Use remark to convert markdown into HTML string
    const processedContent = converter.makeHtml(matterResult.content);
    const html = processedContent.toString();

    // Combine the data with the title and contentHtml
    return {
        title: name,
        html,
        ...matterResult.data
    };
}