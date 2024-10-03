"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { contact } from "@/data/datas";

import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    firstname: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e: any) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit() {
    console.log(formData);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 2.4, ease: "easeIn" }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form action={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-accent text-4xl">Travaillons ensemble !</h3>
              <p className="text-white/60">
                Vous avez besoin d'un développeur web full-stack pour votre projet ? N'hésitez pas à me contacter pour en discuter.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="name" placeholder="Nom" onChange={(e) => handleChange(e)} />
                <Input type="text" name="firstname" placeholder="Prénom" onChange={(e) => handleChange(e)} />
                <Input type="email" name="email" placeholder="Email" onChange={(e) => handleChange(e)} />
                <Input type="phone" name="phone" placeholder="Numéro de téléphone" onChange={(e) => handleChange(e)} />
              </div>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Ecrivez votre message ici..."
                onChange={(e) => handleChange(e)}
              />
              <Button
                className="max-w-40"
                type="submit"
              >
                Envoyer
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contact.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded flex items-center justify-center">
                    <div className="text-[28px]">{item.icon} </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}