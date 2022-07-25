import PropTypes from "prop-types";
import React, { useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { Box, Stack, Switch, Typography } from "@mui/material";

const NivoLineChart = (props) => {
  const { data = [] } = props;

  return (
    <Box height={300}>
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 10, bottom: 50, left: 80 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-,.0~f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickValues: 5,
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        enableSlices="x"
        useMesh={true}
      />
    </Box>
  );
};

NivoLineChart.propTypes = {
  data: PropTypes.array,
};

export default NivoLineChart;
