import { useContext, Fragment, useState } from "react";
import { ListContext } from "../context/listContext";
import Item from "./Item";
import Selector from "./Selector";
import Button from "./Button";
import Modal from "./Modal";

export default function PackingList() {
  const [toggleModal, setToggleModal] = useState(false);

  const listContext = useContext(ListContext);
  if (!listContext) return;
  const { setSortBy, sortBy, sortedItems, clearAllItems, items } = listContext;

  const selectOption = [
    "sort by input order",
    "sort by description",
    "sort by packed status",
  ];

  function onConfirmHandler() {
    setToggleModal(false);
    clearAllItems();
  }

  return (
    <div className="bg-accent text-light py-16 px-0 flex justify-between flex-col gap-12 items-center">
      {toggleModal && (
        <Modal setToggleModal={setToggleModal}>
          <span className="text-lg text-center text-dark font-medium uppercase text-rose-500">
            Are sure you want to clear your travel list
          </span>
          <div className="flex items-center justify-center gap-4">
            <Button btnColor="dark" onClickHandler={onConfirmHandler}>
              Yes
            </Button>
            <Button
              btnColor="dark"
              onClickHandler={() => setToggleModal(false)}
            >
              No
            </Button>
          </div>
        </Modal>
      )}
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 justify-center content-start w-[80%]">
        {sortedItems?.map((item) => (
          <Fragment key={item.id}>
            <Item item={item} />
          </Fragment>
        ))}
      </ul>
      <div className="text-dark flex items-center gap-4 mb-4">
        <Selector
          selectValue={sortBy}
          setValue={setSortBy}
          size={"lg"}
          optionValue={selectOption}
        />
        <Button
          btnColor="dark"
          onClickHandler={() => setToggleModal(true)}
          isDisabled={!items.length}
        >
          Clear
        </Button>
        x
      </div>
    </div>
  );
}
