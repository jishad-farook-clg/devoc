
export async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY!;

  const res = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret,
        response: token,
      }),
    }
  );

  return res.json();
}