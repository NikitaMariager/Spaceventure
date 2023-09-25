<template>
  <div class="container max-w-6xl mx-auto">
    <div id="editor"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import "quill/dist/quill.snow.css";

const props = defineProps({
  placeholder: {
    type: String,
    default: "placeholder",
  },
  putText: {
    type: String,
    default: "",
  },
});

/* opretter emit - event der sendes til parrent */
const emit = defineEmits(["contentChange"]);

// Quill editor
onMounted(async () => {
  if (process.client) {
    const Quill = (await import("quill")).default;
    const quill = new Quill("#editor", {
      theme: "snow",
      placeholder: props.placeholder,
    });
    //sætter text(html) om til tekts
    const value = props.putText;
    const delta = quill.clipboard.convert(value);
    quill.setContents(delta, "silent");

    quill.on("text-change", function () {
      var justHtml = quill.root.innerHTML;
      setContent(justHtml);
    });
  }
});

/* den funktion der aktiver emit - og de data 'quillcontent' der skal sendes med tilbage */
function setContent(quillContent) {
  emit("contentChange", quillContent);
}
</script>
