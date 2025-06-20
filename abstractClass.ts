abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}

    abstract getSepia(): void
}


class Instagram extends TakePhoto{
    getSepia(): void {
        console.log("Don't Know what's happening... Someone please helpppppp!!!!!!!!!!!");
    }
}

// const newUser = new TakePhoto("test", "test2", 2)

export {}