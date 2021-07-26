import React, { useState } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, IonList,
IonGrid, IonRow, IonCol
} from '@ionic/react';
import './Tab2.css';

import { Asset } from "../models/asset.model";
import AssetItem from '../components/AssetItem';
const Tab2: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
    useIonViewDidEnter(async () => {
        const result = await fetch('http://localhost:3000/assets.json', {
            headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2Mjc5NDE3OTYsImVtYWlsIjoiYWRtaW5AbWFpbC5jb20ifQ.U70-jApvbYB67pAINYySmef0mUNBjQ7Kf3srKmQa6_o' }
        });
        const data = await result.json();
        setAssets(data.assets.concat(data.total));
    })
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Assets</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
            <IonRow>
                <IonCol>
                    <div>
                        Asset
                    </div>
                </IonCol>
                <IonCol>
                    <div>
                        Value
                    </div>
                </IonCol>
                <IonCol>
                    <div>
                        Income
                    </div>
                </IonCol>
            </IonRow>

            {assets.map((asset, idx) =>
                <AssetItem key={idx} asset={asset} />
                )}
        </IonGrid>



      </IonContent>
    </IonPage>
  );
};

export default Tab2;
