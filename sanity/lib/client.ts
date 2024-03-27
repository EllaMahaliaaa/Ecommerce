import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "sksC9dXN3YSFi9hIpVOgKQd1aEBwkXJYcS9nzXNQyYBeXJ3yG9RRfu92CphxaPd7mCe8UCERSCw8s1O0U8bl47q9yQpiqZAp4OYg1cRrgRGV1iLIPrxqFpkzTI7G9BvKeiZWN6VtHUOyBBlwTG0cmGAZ6IHeyiAD1GjS3Vk7nfJedloGSUIW",
  
})
