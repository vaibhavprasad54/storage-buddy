"use client"

import React from 'react'
import { ResponsivePie } from '@nivo/pie'

const data = [
    {
      "id": "Files",
      "label": "Files",
      "value": 15,
      "color": "hsl(60, 70%, 50%)"
    },
    {
      "id": "Images",
      "label": "Images",
      "value": 24,
      "color": "hsl(266, 70%, 50%)"
    },
    {
      "id": "Videos",
      "label": "Videos",
      "value": 17,
      "color": "hsl(301, 70%, 50%)"
    },
    {
      "id": "Others",
      "label": "Others",
      "value": 34,
      "color": "hsl(249, 70%, 50%)"
    },
  ]

const Graph = () => (
    <ResponsivePie
        data={data}
        // margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        valueFormat=" >-"
        innerRadius={0.55}
        padAngle={3}
        cornerRadius={4}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsTextOffset={4}
        arcLinkLabelsTextColor="#6e6e6e"
        arcLinkLabelsOffset={-5}
        arcLinkLabelsDiagonalLength={15}
        arcLinkLabelsStraightLength={21}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 70,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#fff'
                        }
                    }
                ]
            }
        ]}
    />
)

export default Graph