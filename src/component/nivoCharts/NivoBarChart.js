import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Box, Stack, Switch, Typography } from '@mui/material';
import { BasicTooltip } from '@nivo/tooltip';

const ToolTip = (props) => {
  return (
    <BasicTooltip
      id={props.indexValue}
      value={props.value}
      color={props.color}
      enableChip
    />
  );
};

const NivoBarChart = (props) => {
  const { data = [], keys = [], indexBy } = props;
  const [state, setState] = useState({ logScale: false });
  const handleChange = (e) => {
    setState((p) => ({ ...p, [e.target.name]: e.target.checked }));
  };

  return (
    <Box height={300}>
      <Stack
        className="pdf_ignore"
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="flex-end"
      >
        <Typography>Linear scale</Typography>
        <Switch
          checked={state.logScale}
          onChange={handleChange}
          name="logScale"
        />
        <Typography>Log scale</Typography>
      </Stack>
      <ResponsiveBar
        data={data}
        keys={keys}
        indexBy={indexBy || 'month'}
        margin={{ top: 20, right: 10, bottom: 50, left: 80 }}
        padding={0.2}
        groupMode="grouped"
        valueScale={{ type: state.logScale ? 'symlog' : 'linear' }}
        indexScale={{ type: 'band', round: true }}
        valueFormat=" >-,"
        colors={({ id, data }) => data[`${id}Color`]}
        borderRadius={10}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickValues: 5,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="white"
        role="application"
        barAriaLabel={(e) => {
          return `${e.id}: ${e.formattedValue} : ${e.indexValue}`;
        }}
        tooltip={ToolTip}
      />
    </Box>
  );
};

NivoBarChart.propTypes = {
  data: PropTypes.array,
  keys: PropTypes.array,
  indexBy: PropTypes.string,
};

export default NivoBarChart;
