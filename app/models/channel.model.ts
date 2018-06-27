export class Channel {
    public channel: string;
    public path: Path;

    constructor(channel: string, path: Path) {
        this.channel = channel;
        this.path = path;
    }
}
export class Path {
    public componentName: string;
    public delay: number;
    public description: string;
    public pathurl: string;

    constructor(componentName: string, delay: number, description:string, pathurl:string) {
        this.componentName = componentName;
        this.delay = delay;
        this.description = description;
        this.pathurl = pathurl
        
    }
}