import { db } from "@/db/firebase";
import type { Experience } from "@/interfaces/experience";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const useFirestore = (collectionName: string) => {
  const [data, setData] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const q = query(
          collection(db, collectionName),
          orderBy("start_date", "desc"),
        );
        const querySnapshot = await getDocs(q);

        const documents = querySnapshot.docs.map((doc) => {
          const item = doc.data();
          const lang = i18n.language.split("-")[0];

          return {
            id: doc.id,
            company: item.company,
            start_date: item.start_date?.toDate(),
            end_date: item.end_date?.toDate(),
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
  }, [collectionName, i18n.language]);

  return { data, loading };
};
