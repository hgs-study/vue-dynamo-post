<template>
  <div id="pageWrap">
      <header>
          <slot name = "header"></slot>
      </header>
      <nav id ="nav">
          <slot name ="nav"></slot>
      </nav>
      <section id="content">
          <slot name="content"></slot>
      </section>
      <footer>
          <slot name = "footer"></slot>
      </footer>
  </div>
</template>
