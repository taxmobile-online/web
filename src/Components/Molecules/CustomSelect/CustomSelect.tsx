import React, { useState, useRef } from "react";
//
import { Wrapper, Dropdown, DropdownItem } from "./style";
//
import Typography from "Components/Atoms/Typography";
import { AnimatePresence } from "framer-motion";
import { animate_slideUp } from "Styles/Base/Animation";
import useOnClickOutside from "Hooks/useOnClickOutside";
import { Flex } from "Styles/layouts/Flex";
import { CaretDownIcon } from "Components/Atoms/SvgIcons";

// Types
interface Props {
  onOptionChange?: (network: any) => void;
  value: string;
  options?: Array<any>;
  dropdownwidth?: "full" | "customr";
  label?: string;
  hide?: any;
}
// Main component
const CustomSelect: React.FC<Props> = (props) => {
  // Refs
  const dropdownRef = useRef<any>();

  // State
  const [show, setShow] = useState<boolean>(false);

  // Hooks
  useOnClickOutside(dropdownRef, () => setShow(false));

  // Props
  const { onOptionChange, value, options, dropdownwidth, label } = props;

  // Methods
  const handleDropdownShow = (e: Event) => {
    e.stopPropagation();
    setShow(!show);
  };

  // Data to render
  return (
    <>
      {label && <Typography as="label" className="h-34" text={label} />}
      <Wrapper
        onClick={handleDropdownShow}
        ref={dropdownRef}
        dropdownwidth={dropdownwidth}
      >
        <Flex gap="1rem" flexRowJcBetweenAiCenter>
          <Typography as="p" className="p-16" text={value} />
          <CaretDownIcon width={16} height={16} />
        </Flex>
        <AnimatePresence>
          {show && (
            <Dropdown
              variants={animate_slideUp.variants}
              exit={animate_slideUp.variants.hidden}
              transition={animate_slideUp.transition}
              initial="hidden"
              animate={show ? "visible" : "hidden"}
              dropdownwidth={dropdownwidth}
            >
              {options?.map((option) => (
                <DropdownItem
                  key={option.id}
                  onClick={() => onOptionChange!(option)}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.1 },
                    },
                    hidden: { opacity: 0, y: 20 },
                  }}
                  exit={{ opacity: 0, y: 20, transition: { duration: 0.06 } }}
                >
                  {option.icon}
                  <Typography
                    as="span"
                    className="paragraph-2"
                    text={option.label}
                  />
                </DropdownItem>
              ))}
            </Dropdown>
          )}
        </AnimatePresence>
      </Wrapper>
    </>
  );
};

export default CustomSelect;
