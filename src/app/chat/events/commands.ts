export enum ChatCommandTypes {
    Date = 'date',
    Map = 'map',
    Rate = 'rate',
    Complete = 'complete',
}

export class DateCommand {
    readonly type = ChatCommandTypes.Date;
    constructor(public data: string) {}
}

export class MapCommand {
    readonly type = ChatCommandTypes.Map;
    constructor(public data: {
        lat: number;
        lng: number;
    }) {}
}

export class RateCommand {
    readonly type = ChatCommandTypes.Rate;
    constructor(public data: number[]) {}
}

export class CompleteCommand {
    readonly type = ChatCommandTypes.Complete;
    constructor(public data: string[]) {}
}

export type CommandsUnion =
    DateCommand | MapCommand | RateCommand | CompleteCommand;
