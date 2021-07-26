import {
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
    useIonViewDidEnter
} from '@ionic/react';
import './Tab3.css';
import React, {useState} from "react";
import {Liability} from "../models/liability.model";
import LiabilityItem from "../components/LiabilityItem";

const Tab3: React.FC = () => {
    const [liabilities, setLiabilities] = useState<Liability[]>([]);
    useIonViewDidEnter(async () => {
        const result = await fetch('http://localhost:3000/liabilities.json', {
            headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE2Mjg0NzgzMjgsImVtYWlsIjoib3NjYXJtaWNoZWxoQGdtYWlsLmNvbSJ9.XmdptL-nn1wIn68Ky1ke2dT5cqF07xE1zoJeHNCVxko' }
        });
        const data = await result.json();
        setLiabilities(data.liabilities.concat(data.total));
    })
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Liabilities</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <div>
                                Liability
                            </div>
                        </IonCol>
                        <IonCol>
                            <div>
                                Debt
                            </div>
                        </IonCol>
                        <IonCol>
                            <div>
                                Payment
                            </div>
                        </IonCol>
                    </IonRow>

                    {liabilities.map((liability, idx) =>
                        <LiabilityItem key={idx} liability={liability} />
                    )}
                </IonGrid>



            </IonContent>
        </IonPage>
    );
};

export default Tab3;
