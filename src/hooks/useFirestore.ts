"use client";

import { useState, useEffect } from "react";
import { collection, onSnapshot, QuerySnapshot, DocumentData, query, orderBy, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface GalleryImage {
  id: string;
  imageURL: string;
  timestamp: Timestamp | Date | string;
  uEmail: string;
  uName: string;
  uPhoto: string;
  uid: string;
}

export function useFirestore(collectionName: string) {
  const [documents, setDocuments] = useState<GalleryImage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, collectionName),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot: QuerySnapshot<DocumentData>) => {
        const docs: GalleryImage[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          docs.push({
            id: doc.id,
            imageURL: data.imageURL || "",
            timestamp: data.timestamp || new Date(),
            uEmail: data.uEmail || "",
            uName: data.uName || "",
            uPhoto: data.uPhoto || "",
            uid: data.uid || "",
          });
        });
        setDocuments(docs);
        setLoading(false);
        setError(null);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
        console.error("Firestore error:", err);
      }
    );

    return () => unsubscribe();
  }, [collectionName]);

  return { documents, error, loading };
}

