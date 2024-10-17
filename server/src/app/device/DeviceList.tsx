'use client';

import {ReadonlyChildrenProps} from "@/data/types/props";

interface DeviceListProps extends ReadonlyChildrenProps{

}

interface DeviceListItemProps {

}

export function DeviceList(props: DeviceListProps) {

    return (
        <div>
            <div>

            </div>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}

export function DeviceListItem(props: DeviceListItemProps) {

    return (
        <li>
            <div>

            </div>
        </li>
    );
}