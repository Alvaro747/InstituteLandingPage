import { React, useState, useEffect } from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  Bars3Icon,
  BookmarkSquareIcon,
  LifebuoyIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import logo from "../../assets/logoFacetoface.png";

const NavBar = () => {
  const contacto = ["3143156834", "3143130238", "fijo"];

  const [animation, setAnimation] = useState("animate-bounce");

  const delAnimation = () => {
    setAnimation("");
  };

  const resources = [
    {
      name: "Centro de ayuda",
      description: "Comunicate con nosotros para resolver cualquier duda",
      href: "#",
      icon: LifebuoyIcon,
    },
    {
      name: "ISAURA+",
      description: "Ingreso a la plataforma para nuestros estudiantes",
      href: "https://isaura.institutofacetoface.edu.co/",
      icon: BookmarkSquareIcon,
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className={`w-full sticky top-0 z-20`}>
      <Popover className="relative bg-white border-b-2 w-full">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between  border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1 px-5 sm:px-10">
              <a href="#home">
                <img
                  className={`h-16 sm:h-13 transition-all`}
                  src={logo}
                  alt=""
                />
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <a
                 href="#home"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Inicio
              </a>
              <a
                href="#galeri"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Galeria
              </a>
              <a
                href="#program"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Programas
              </a>
              <a
                href="#comentarios"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Comentarios
              </a>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                      )}
                    >
                      <span>Plataformas</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <Popover.Button>
                              <a
                                key={item.name}
                                href={item.href}
                                target={'_blank'}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-lime-500"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                              </Popover.Button>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div
              id="contact-box"
              onFocus={delAnimation}
              className={`hidden items-center justify-end md:flex md:flex-1 lg:w-0 ${animation}`}
            >
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={contacto}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField {...params} label="Contacto" />
                )}
              />
            </div>
          </div>
        </div>

        {/*   MENU MOBILE */}

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src={logo} alt="Your Company" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {resources.map((item) => (
                      <Popover.Button>
                      <a
                        key={item.name}
                        href={item.href}
                        target={'_blank'}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-lime-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                      </Popover.Button>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Popover.Button>
                  <a
                    href="#home"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Inicio
                  </a>
                  </Popover.Button>
                  <Popover.Button>
                  <a
                    href="#galeri"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Galeria
                  </a>
                  </Popover.Button>
                  <Popover.Button>
                  <a
                    href="#program"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Programas
                  </a>
                  </Popover.Button>
                  <Popover.Button>

                  <a
                    href="#comentarios"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Comentarios
                  </a>
                  </Popover.Button>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mt-6  text-center text-base font-medium text-gray-500">
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={contacto}
                      sx={{ width: 200 }}
                      renderInput={(params) => (
                        <TextField {...params} label="Contacto" />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default NavBar;
