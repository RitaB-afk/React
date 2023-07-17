import React, { useEffect, useState } from "react";
import useStateContext from "../hooks/useStateContext";
import { BASE_URL, ENDPOINTS, createAPIEndpoint } from "../api";
import {
  CardContent,
  Card,
  Typography,
  ListItemButton,
  List,
  CardHeader,
  Box,
  LinearProgress,
  CardMedia,
} from "@mui/material";
import { getFormatedTime } from "../helper";
import { useNavigate } from 'react-router'

export default function Quiz() {
  const { context, setContext } = useStateContext();
  const [Qns, setQns] = useState([]);
  const [qnIndex, setQnIndex] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const navigate = useNavigate()

  let timer;

  const startTimer = () => {
    timer = setInterval(() => {
      setTimeTaken((prev) => prev + 1);
    }, [1000]);
  };

  useEffect(() => {
    setContext({ timeTaken: 0, selectedOptions: [] });
    createAPIEndpoint(ENDPOINTS.question)
      .fetch()
      .then((res) => {
        setQns(res.data);
        startTimer();
      })
      .catch((err) => {
        console.error(err);
      });
    return () => {
      clearInterval(timer);
    };
  }, []);

  const updateAnswer = (qnId, optionIdx) => {
    const temp = [...context.selectedOptions];
    temp.push({
      qnId,
      selected: optionIdx,
    });
    if (qnIndex < 4) {
      setContext({ selectedOptions: [...temp] });
      setQnIndex(qnIndex + 1);
    } else {
      setContext({ selectedOptions: [...temp], timeTaken });
       navigate("/result")
    }
  };

  return Qns.length !== 0 ? (
    <Card
      sx={{
        maxWidth: 640,
        mx: "auto",
        mt: 5,
        "& .MuiCardHeader-action": { m: 0, alignSelf: "center" },
      }}
    >
      <CardHeader
        title={"Question " + (qnIndex + 1) + " of 5"}
        action={<Typography>{getFormatedTime(timeTaken)}</Typography>}
      ></CardHeader>
      <Box>
        <LinearProgress
          variant="determinate"
          value={((qnIndex + 1) * 100) / 5}
        />
      </Box>
      {Qns[qnIndex].imageName != null ? (
        <CardMedia
          component="img"
          image={BASE_URL + "images/" + Qns[qnIndex].imageName}
          sx={{ width: "auto", m: "10px auto" }}
        ></CardMedia>
      ) : null}
      <CardContent>
        <Typography variant="h6">
          {Qns[qnIndex].qnInWords}
          <List>
            {Qns[qnIndex].options.map((item, index) => (
              <ListItemButton
                key={index}
                onClick={() => updateAnswer(Qns[qnIndex].qnId, index)}
              >
                <div>
                  {String.fromCharCode(65 + index) + " . "}
                  {item}
                </div>
              </ListItemButton>
            ))}
          </List>
        </Typography>
      </CardContent>
    </Card>
  ) : null;
}
