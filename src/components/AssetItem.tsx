import React from "react";
import {IonRow, IonCol} from "@ionic/react";
import { Asset } from "../models/asset.model";

const AssetItem: React.FC<{asset: Asset}> = ({asset}) => {
    return (
        <IonRow>
            <IonCol>
                <div>
                    {asset.name}
                </div>
            </IonCol>
            <IonCol>
                <div>
                    {asset.value}
                </div>
            </IonCol>
            <IonCol>
                <div>
                    {asset.income}
                </div>
            </IonCol>
        </IonRow>
    );
}

export default AssetItem;
