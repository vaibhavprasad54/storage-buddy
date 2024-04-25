"use client";

import React, { useEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import useStore from "@/lib/store";
import Categories from "./Categories";

const graphData = [
  {
    id: "Files",
    label: "Files",
    value: 15,
    color: "hsl(60, 70%, 50%)",
  },
  {
    id: "Images",
    label: "Images",
    value: 24,
    color: "hsl(266, 70%, 50%)",
  },
  {
    id: "Videos",
    label: "Videos",
    value: 17,
    color: "hsl(301, 70%, 50%)",
  },
  {
    id: "Others",
    label: "Others",
    value: 34,
    color: "hsl(249, 70%, 50%)",
  },
];

const Graph = () => {
  const [files, setFiles] = useState<number>(0);
  const [videos, setVideos] = useState<number>(0);
  const [images, setImages] = useState<number>(0);
  const [others, setOthers] = useState<number>(0);

  const data = useStore((state) => state.data);
  console.log("Zustand store:", data);

  useEffect(() => {
    const first: any = data.filter(
      (item) =>
        item.fileUrl.split(".").pop() == "pdf" ||
        item.fileUrl.split(".").pop() == "txt" ||
        item.fileUrl.split(".").pop() == "xlsx" ||
        item.fileUrl.split(".").pop() == "xls" ||
        item.fileUrl.split(".").pop() == "doc"
    );
    const second: any = data.filter(
      (item) =>
        item.fileUrl.split(".").pop() == "mp4" ||
        item.fileUrl.split(".").pop() == "mov" ||
        item.fileUrl.split(".").pop() == "avi"
    );
    const third: any = data.filter(
      (item) =>
        item.fileUrl.split(".").pop() == "png" ||
        item.fileUrl.split(".").pop() == "jpg" ||
        item.fileUrl.split(".").pop() == "svg"
    );
    const fourth: any = data.filter(
      (item) =>
        item.fileUrl.split(".").pop() == "mp3" ||
        item.fileUrl.split(".").pop() == "zip" ||
        item.fileUrl.split(".").pop() == "exe"
    );

    setFiles(first);
    setVideos(second);
    setImages(third);
    setOthers(fourth);
  }, [data]);


  graphData.forEach((item) => {
    switch (item.id) {
      case "Files":
        item.value = files.length;
        break;
      case "Videos":
        item.value = videos.length;
        break;
      case "Images":
        item.value = images.length;
        break;
      case "Others":
        item.value = others.length;
        break;
      default:
        break;
    }
  });

  return (
    <>
      <ResponsivePie
        data={graphData}
        // margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        valueFormat=" >-"
        innerRadius={0.55}
        padAngle={3}
        cornerRadius={4}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsTextOffset={4}
        arcLinkLabelsTextColor="#6e6e6e"
        arcLinkLabelsOffset={-5}
        arcLinkLabelsDiagonalLength={15}
        arcLinkLabelsStraightLength={21}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 70,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#fff",
                },
              },
            ],
          },
        ]}
      />
      <div className="flex sm:hidden">
        <Categories files={files.length} videos={videos.length} images={images.length} others={others.length} />
      </div>
    </>
  );
};

export default Graph;
