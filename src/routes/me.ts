import { Router } from "express";
import FetchCatType from "../utils/fetchCatApi.js";


const router = Router();


router.get('/me', async (req, res) => {
    const fact = await FetchCatType();
    const timestamp = new Date().toISOString();
      try {
            res.status(200).json({
        status: "success" as string,
        user: {
            email: "delightvincent487@gmail.com" as string,
            name: "Delight vincent Aberage " as string,
            stack: "nodejs, expressjs, typescript" as string,
        },
        timestamp,
        fact
    });
      } catch (error) {
        res.status(500).json({
            status: "error" as string,
            message: "error getting your request please try again" as string,
        })
      }
  

});

export default router;