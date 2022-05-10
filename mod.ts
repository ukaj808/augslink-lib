export interface Room {
    id: string;
    vote: Vote;
    connectedUsers: Map<string, User>;
    currentSong: Song | null;
}

export interface RoomEvent {
    eventId: string;
    type: string;
}

export interface UserWelcomeEvent extends RoomEvent {
    userId: string;
    username: string;
    roomState: Room;
}

export interface UserJoinEvent extends RoomEvent {
    userId: string;
    username: string;
}

export interface UserLeftEvent extends RoomEvent {
    userId: string;
}

export interface Song {
    type: "youtube";
    name: string;
}

export interface User {
    id: string;
    username: string;
    address: UserAddress;
    queue: Song[];
}

export interface UserOptions {
    onJoin(): void;

    onLeave(): void;
}

export interface UserAddress {
    hostname: string;
    port: number;
    socket: WebSocket;
}

export interface UserAddressOptions {
    hostname: string;
    port: number;
    socket: WebSocket;
}

export interface UserSongQueue {
    songs: Song[];
}

export interface Vote {
    numVotedForSkip: number;
}

export interface TsMapHelper {
    dataType: string;
    value: Array<unknown>;
}