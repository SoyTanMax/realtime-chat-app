import { useLoaderData, Link, Outlet } from "@remix-run/react";

export interface Channel {
    id: number,
    title: String
}

export const loader = () => {
    return {
        channels: [
            {
                id: 0,
                title: 'really cool channel',
            },
            {
                id: 1,
                title: 'even cooler channel',
            },
        ]
    }
}

export default function Channels(){
    const {channels} = useLoaderData();

    return (
        <div>
            <Outlet />
            {channels.map((channel: Channel) => (
                <p key={channel.id}>
                    <Link to={`/channels/${channel.id}`}>
                        {channel.title}
                    </Link>
                </p>
            ))}
        </div>
    )

    return 
};