export default async function handler(req, res) {
    if (req.method === "POST") {
        const { _formType, _email, _firstName, _mensaje, _gdpr } =
            req.body.formData;

        if (
            _formType === "" ||
            _email === "" ||
            _firstName === "" ||
            _mensaje === ""
        ) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        try {
            const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
            const API_KEY = process.env.MAILCHIMP_API_KEY;
            const DATACENTER = process.env.MAILCHIMP_API_SERVER;
            const data = {
                email_address: _email,
                merge_fields: {
                    FNAME: _firstName,
                    TYPE: _formType,
                    MSG: _mensaje,
                },
                status: "subscribed",
            };

            const response = await fetch(
                `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
                {
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${API_KEY}`,
                    },
                    method: "POST",
                }
            );

            if (response.status >= 400) {
                return res.status(400).json({
                    sent: "0",
                    msg: `There was an error subscribing to the newsletter.`,
                });
            }

            return res.status(201).json({ sent: "1", msg: "" });
        } catch (error) {
            return res
                .status(500)
                .json({ msg: error.message || error.toString() });
        }
    }
    res.status(200).send(req.body);
}
