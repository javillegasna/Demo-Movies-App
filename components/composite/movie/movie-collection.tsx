"use client";

import { useEffect, useState } from "react";

import { tmdb } from "@/lib/tmdb/api";
import { MediaBackdrop } from "@/components/composite/media";
import { MovieCollectionDialog } from "@/components/composite/movie";

interface MovieCollectionProps {
  id: number;
}

export const MovieCollection: React.FC<MovieCollectionProps> = (props) => {
  const [collection, setCollection] = useState<tmdb.DetailedCollection>({});
  useEffect(() => {
    const collection = tmdb.collection.details({ id: props.id });
    setCollection(collection);
  }, [props.id]);

  return (
    <div className="h-hero relative w-full">
      <MediaBackdrop image={collection.backdrop_path} alt={collection.name} />
      <div className="overlay">
        <div className="p-4 md:p-10">
          <p className="line-clamp-3 text-xs text-muted-foreground md:text-lg">Part of</p>
          <h2 className="line-clamp-1 text-lg font-medium md:text-2xl">{collection.name}</h2>
          <p className="mb-4 line-clamp-1 max-w-2xl text-muted-foreground">
            Includes:{" "}
            {collection.parts
              ? collection.parts.map((part: tmdb.Movie) => part.title).join(", ")
              : ""}
          </p>
          <MovieCollectionDialog collection={collection} />
        </div>
      </div>
    </div>
  );
};
