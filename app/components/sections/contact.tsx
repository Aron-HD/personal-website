"use client"

import { ChangeEvent, FormEvent, HTMLProps, PropsWithRef, forwardRef, useState } from "react";
import SectionTitle from "../../components/sectionTitle";

const Contact = (props: HTMLProps<HTMLElement>) => {

    const [formState, setFormState] = useState({
        name: "",
        subject: "",
        message: "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget
        setFormState({ ...formState, [name]: value })
    }

    function encode(data: any) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": event.currentTarget.getAttribute("name"),
                ...formState,
            }),
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error))
    }
    const pageName = "Contact"
    return (
        <>
            {/* <Seo title={pageName} /> */}
            <section {...props} className="flex w-full h-full center" title={pageName}> 
                <div
                    className="w-[60vw] flex flex-col gap-6 items-start justify-start">
                    <SectionTitle n={3}>{pageName}</SectionTitle>
                    <div className="flex center w-full">
                        <form
                            className="grid gap-2 min-w-[320px]"
                            name="Contact Form"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            method="POST"
                            action="/"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="Contact Form" />
                            <fieldset>
                                <label className="block" htmlFor="name">Username</label>
                                <input name="name" id="name" className="input" onChange={handleChange} />
                            </fieldset>
                            <fieldset>
                                <label className="block" htmlFor="subject">Subject</label>
                                <input name="subject" id="subject" className="input" onChange={handleChange} />
                            </fieldset>
                            <fieldset>
                                <label className="block" htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="input w-full"
                                    rows={6}
                                    onChange={handleChange}
                                />
                            </fieldset>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

Contact.displayName = "Contact";

export default Contact;