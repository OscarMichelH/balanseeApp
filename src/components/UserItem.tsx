import React from "react";
import {IonItem, IonAvatar, IonLabel} from "@ionic/react";
import { User} from "../models/user.model";

const UserItem: React.FC<{user: User}> = ({user}) => {
    return (
        <IonItem>
            <IonAvatar slot="start">
                <IonLabel>
                    <h2>{user.email}</h2>
                </IonLabel>
            </IonAvatar>
        </IonItem>
    );
}

export default UserItem;
