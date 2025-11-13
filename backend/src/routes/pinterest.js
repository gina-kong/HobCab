import express from 'express'
import fetch from 'node-fetch'

const router = express.Router();

router.get('/boards/:boardId/pins', async (req, res) => {
  const { boardId } = req.params;
  const url = `https://api.pinterest.com/boards/${boardId}/pins?`;
  response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json'
    }
  });
  if (!response.ok) {
    const body = await response.text();
    return res.status(response.status).json({error: body});
  }
  const data = await response.json();
  const pins = data.items;
  console.log(pins);
});

export default router;