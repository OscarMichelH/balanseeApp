import React from "react";
import {IonRow, IonCol} from "@ionic/react";
import { Liability } from "../models/liability.model";

const LiabilityItem: React.FC<{liability: Liability}> = ({liability}) => {
    return (
        <IonRow>
            <IonCol>
                <div>
                    {liability.name}
                </div>
            </IonCol>
            <IonCol>
                <div>
                    {liability.debt}
                </div>
            </IonCol>
            <IonCol>
                <div>
                    {liability.payment}
                </div>
            </IonCol>
        </IonRow>
    );
}

export default LiabilityItem;
