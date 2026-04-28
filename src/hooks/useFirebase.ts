import { db } from "@/db/firebase";
import type { Experience } from "@/interfaces/experience";
import type { Formation } from "@/interfaces/formation";
import type { Projects } from "@/interfaces/project";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const useFirebase = (collectionName: string, orderByField?: string) => {
  const [data, setData] = useState<Projects[] | Experience[] | Formation[]>([]);
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const colRef = collection(db, collectionName);
        const q = orderByField
          ? query(colRef, orderBy(orderByField, "desc"))
          : colRef;
        const querySnapshot = await getDocs(q);

        const documents = querySnapshot.docs.map((doc) => {
          const item = doc.data();
          const lang = i18n.language.split("-")[0];

          return {
            ...item,
            ...item.translations[lang],
          };
        });

        setData(documents);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [collectionName, i18n.language, orderByField]);

  return { data, loading };
};
