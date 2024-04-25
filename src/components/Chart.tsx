"use client"

import React, { PureComponent } from 'react';
import { ResponsivePie } from '@nivo/pie'


const Chart = () => {

  const data = [
    {
      "id": "Files",
      "label": "Files",
      "value": 545,
      "color": "hsl(58, 70%, 50%)"
    },
    {
      "id": "Videos",
      "label": "Videos",
      "value": 228,
      "color": "hsl(288, 70%, 50%)"
    },
    {
      "id": "Images",
      "label": "Images",
      "value": 439,
      "color": "hsl(293, 70%, 50%)"
    },
    {
      "id": "Others",
      "label": "Others",
      "value": 209,
      "color": "hsl(187, 70%, 50%)"
    },
  ]

  return (
    <div className='h-56'>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 75, bottom: 55, left: 75 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
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
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#808080"
        arcLinkLabelsThickness={2}
        arcLinkLabelsDiagonalLength={12}
        arcLinkLabelsStraightLength={12}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
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
    />
    </div>
  )
}

export default Chart