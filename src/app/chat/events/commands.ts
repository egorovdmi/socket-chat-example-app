export enum ChatCommandTypes {
    Date = 'date',
    Map = 'map',
    Rate = 'rate',
    Complete = 'complete',
}

export class DateCommand {
    readonly type = ChatCommandTypes.Date;
    data: string;
}

export class MapCommand {
    readonly type = ChatCommandTypes.Map;
    data: {
        lat: number;
        lng: number;
    };
}

export class RateCommand {
    readonly type = ChatCommandTypes.Rate;
    data: number[];
}

export class CompleteCommand {
    readonly type = ChatCommandTypes.Complete;
    data: string[];
}

export type CommandsUnion =
    DateCommand | MapCommand | RateCommand | CompleteCommand;
