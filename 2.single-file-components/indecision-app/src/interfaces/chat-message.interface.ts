export interface IChatMessage {
    id: number;
    message: string;
    itsMine: boolean;
    imageURL?: string;
}