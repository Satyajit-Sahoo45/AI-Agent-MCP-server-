import { config } from "dotenv";
import { TwitterApi } from "twitter-api-v2";

config();

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const twitterObj = client.readWrite;

export async function createPost(status) {
  try {
    const newPost = await twitterObj.v2.tweet(status);
    return {
      content: [
        {
          type: "text",
          text: `✅ Tweeted: ${status}`,
        },
      ],
    };
  } catch (error) {
    console.error("❌ Twitter post error:", error);
    return {
      content: [
        {
          type: "text",
          text: `❌ Failed to tweet: ${error.data?.detail || error.message}`,
        },
      ],
    };
  }
}
