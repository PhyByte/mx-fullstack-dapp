import { Router } from "express";
import { getDelegationDetails } from "./api";
import {
  economics,
  esdts,
  mexEconomics,
  networkConfig,
  nfts,
  stakingProviders,
} from "./storage";

const router = Router({ mergeParams: true });

router.get("/network", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(networkConfig);
  } catch (err) {
    console.log("ERROR" + err);
    res.sendStatus(500);
  }
});

router.get("/economics", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    if (economics == null) {
      res.sendStatus(404);
    }
    res.json(economics);
  } catch (err) {
    console.log("ERROR" + err);
    res.sendStatus(500);
  }
});

router.get("/mex-economics", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    if (mexEconomics == null) {
      res.sendStatus(404);
    }
    res.json(mexEconomics);
  } catch (err) {
    console.log("ERROR" + err);
    res.sendStatus(500);
  }
});

router.get("/providers", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(stakingProviders);
  } catch (err) {
    console.log("ERROR" + err);
    res.sendStatus(500);
  }
});

router.get("/esdts", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(esdts);
  } catch (err) {
    console.log("ERROR" + err);
    res.sendStatus(500);
  }
});

router.get("/nfts", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(nfts);
  } catch (err) {
    console.log("ERROR" + err);
    res.sendStatus(500);
  }
});

router.get("/delegations/:address", async (req, res) => {
  try {
    const data = await getDelegationDetails(req.params.address);
    res.json(data);
  } catch (err) {
    console.log("ERROR" + err);
    res.sendStatus(500);
  }
});

export default router;
