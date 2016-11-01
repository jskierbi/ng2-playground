/**
 * Created by jakub on 01/11/16.
 */
export class HeroDetails {
    constructor(public id: number,
                public name: string,
                public superpower: string,
                public alterEgo?: string) {
    }
}