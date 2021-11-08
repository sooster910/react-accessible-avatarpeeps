import * as React from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgPeep3({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 240 324"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="none" fillRule="evenodd">
        <path
          d="M200.256 272.088a742.226 742.226 0 00-1.247-18.774c-.987-12.455-2.28-24.92-4.432-37.231-2.123-12.148-5.095-23.96-9.375-35.535-1.986-5.37-4.137-9.952-7.257-14.78-2.95-4.564-6.715-7.657-11.405-10.413-4.226-2.482-9.135-6.79-13.188-9.57-1.692-1.16-5.173-1.083-6.333-2.8-1.52-2.248-.535-5.689-2.066-7.93-1.751-2.561-4.204-4.552-6.97-5.998-3.019-2.045-6.574-2.97-10.14-2.843-5.257-.319-10.551 1.356-13.927 5.636-1.684 2.137-2.667 4.601-2.803 7.33-.036.71.192 1.27.567 1.674-.222.298-.444.596-.663.895-.69-1.023-2.305-1.567-3.38-.794a47.379 47.379 0 01-11.333 6.007c-.939-.445-2.076-.239-2.88.487a6.407 6.407 0 01-1.035.76c-1.487.403-2.998.74-4.532 1-.48.082-.887.355-1.195.722-.457-.427-1.085-.632-1.786-.365-8.1 3.089-15.748 7.887-21.561 14.387-6.44 7.201-9.824 16.16-12.4 25.337-2.787 9.935-4.569 20.117-6.065 30.316-1.516 10.335-3.01 20.71-4.053 31.104-.587 5.85-.811 11.752-.545 17.627.132 2.936.4 5.862.827 8.77.1.681.204 1.465.372 2.247a.881.881 0 00-1.014 1.022c.72 4.806 6.528 6.206 10.534 6.76 6.553.905 13.14 1.407 19.756 1.445 6.501.038 13.002-.38 19.49-.753 6.65-.383 13.302-.768 19.954-1.158 26.649-1.563 53.3-3.11 79.949-4.673 2.434-.143 5.214-.336 7.3-1.749 2.858-1.937 3.005-5.014 2.836-8.16z"
          fill="#FFF"
        />
        <path
          d="M70.343 218.33c-.093-.173.122-.329.264-.204 3.235 2.84 4.93 7.401 5.284 11.617.376 4.47-.157 9.1-.36 13.568-.228 4.978-.432 9.958-.709 14.933-.28 5.048-.584 10.094-.843 15.143l-.585 11.358c-.062 1.21.073 2.699-.391 3.828-.72 1.752-2.857 1.48-3.307.017l-.014-.048-.04.031c-.397-1.319-.1-2.885-.033-4.249l.612-12.409c.432-8.771.818-17.542 1.282-26.312l.158-2.923c.217-3.935.384-7.86.518-11.793l.043-1.312c.127-3.95.026-7.679-1.88-11.245zm78.424-72.813c1.803-.171 3.164.427 4.8 1.057.713.274 1.388.59 2.072.918.856.411 1.406 1.137 1.934 1.905l.281.414c2.196 3.217 3.672 6.93 5.339 10.432 1.949 4.098 3.917 8.187 5.825 12.305l.941 2.028c.47 1.014.94 2.03 1.402 3.047l.799 1.772c.802 1.798 1.522 3.699.378 5.553-1.063 1.724-2.948 3.058-4.441 4.39-1.245 1.113-2.49 2.225-3.736 3.336 2.575 2.58 4.303 5.828 5.32 9.312 1.443-.602 3.206-.717 4.698-.978 2.09-.364 2.346 2.8.374 2.762-1.456-.029-3.165.12-4.66-.187.26 1.145.449 2.307.569 3.472.627 6.107-.745 12.25-2.175 18.159l-.118.485c-1.554 6.395-3.027 12.807-4.345 19.256a482.253 482.253 0 00-3.565 19.463c-1.073 6.627-1.833 13.29-2.65 19.953-.123 1.009-.757 1.873-1.871 1.873-.928 0-1.989-.867-1.872-1.873.842-7.255 2.037-14.472 3.224-21.678 2.045-12.409 4.619-24.71 7.58-36.93l.516-2.128c1.332-5.52 2.54-11.207 1.873-16.9-.545-4.636-2.482-9.578-6.311-12.458l-.117-.086c-.895-.657-1.239-1.912-.358-2.776.56-.55 1.122-1.1 1.684-1.648l3.37-3.293.68-.665a66.473 66.473 0 011.723-1.636c.355-.323 1.317-.938 1.388-1.469.045-.346-.365-.954-.53-1.273l-.762-1.536c-.432-.876-.85-1.759-1.272-2.64-.874-1.825-1.761-3.645-2.617-5.479L159 160.762c-1.45-3.107-2.74-6.388-4.636-9.26l-.373-.56c-.312-.472-.588-.925-.785-1.502-.19-.555-.427-1.164-.777-1.637-.821-1.112-2.39-1.742-3.703-1.974-.19-.034-.12-.296.042-.312zm-39.518-2.893c.114 0 .131.163.026.195-1.584.476-3.097 1.245-4.331 2.354-.591.531-1.186 1.134-1.55 1.849a3.15 3.15 0 00-.274.862l-.018.1c-.094.541-.229.842-.504 1.276l-.047.073c-1.569 2.424-2.669 5.117-3.674 7.812l-2.19 5.878-2.188 5.879-2.115 5.683c-.39 1.045-.79 2.087-1.19 3.128-.174.451-.36.9-.519 1.356-.022.062-.09.438-.143.53l.018.03c.441.743 1.618 1.364 2.285 1.903l2.298 1.858c1.638 1.325 3.318 2.613 4.906 3.997.998.87.377 2.426-.735 2.789-1.866.608-3.693 1.335-5.53 2.023-.742.277-1.515.52-2.248.825l-.447.193c-.174.079-.09.078-.083.4.007.338.102.69.157 1.022.619 3.743 1.275 7.48 1.967 11.21 2.45 13.19 5.375 26.284 8.712 39.278 1.686 6.562 3.493 13.091 5.216 19.643 1.718 6.535 3.979 12.975 6.137 19.375.61 1.805-2.251 2.582-2.845.785-2.488-7.527-4.764-15.12-7.115-22.69-4.175-13.45-7.466-27.192-10.377-40.968a579.311 579.311 0 01-4.622-24.463l-.317-1.917c-.217-1.366-.34-2.79.721-3.87 1.037-1.056 2.816-1.43 4.18-1.925l.1-.036c.867-.324 1.741-.636 2.612-.958-1.283-1.01-2.55-2.043-3.83-3.053-1.031-.814-2.08-1.612-3.097-2.446-.84-.687-1.523-1.57-1.61-2.687-.09-1.142.4-2.202.794-3.25l.038-.101a319.09 319.09 0 011.174-3.133l2.466-6.45c1.566-4.1 3.067-8.231 4.715-12.298.652-1.61 1.362-3.193 2.202-4.715.405-.733.839-1.451 1.31-2.144.53-.776 1.009-1.155 1.828-1.583 1.31-.685 2.338-1.834 3.653-2.54 1.29-.693 2.619-1.063 4.084-1.079zm4.252-7.312c.05-.086.182-.048.184.05.034 2.037-.45 4.118-.747 6.133-.3 2.021-.395 4.155-.828 6.154a1.562 1.562 0 01-.052.275l-.02.069c-.183.56-.658 1.035-1.24 1.184a82.57 82.57 0 01.5 3.054c.25 1.758.477 3.518.701 5.279l.268 2.113c.253 1.991.499 3.983.742 5.976.618.258 1.25.472 1.896.657 1.488.426 3.013.6 4.548.75 3.128.307 6.28.449 9.42.623l.672.038c3.529.202 7.077.238 10.597-.124a36.732 36.732 0 005.18-.908c.864-.217 1.705-.541 2.568-.754.287-.07.542-.232.83-.406a.902.902 0 01.538-.33l.063-.01.063-.01.021-.01-.001.007c.176-.024.344-.023.502-.002.063-1.553.131-3.107.217-4.66.23-4.17.864-8.522.017-12.657-.028-.14.161-.188.21-.058 1.661 4.377 1.475 9.164 1.558 13.77.082 4.506.033 9.015.01 13.521.323.137.61.324.838.585.456.522.587 1.43 0 1.933-.26.224-.547.379-.852.486-.016 3.915-.044 7.83-.083 11.746.744.575.814 1.94-.028 2.508-.14 12.678-.37 25.357-.562 38.034l-.4 26.596c-.053 3.543-.141 7.086-.173 10.63l.025.01.089.04c.149.07.37.184.417.3.012.03.015.05.013.066.245.035.486.15.696.349.517.49.412 1.231 0 1.732l-.11.133c-.257.312-.744.432-1.142.369.004 2.211.018 4.423.01 6.634-.001.676-.012 1.351-.023 2.027l-.028 1.62c-.019.923-.1 2.098-1.047 2.513-1.067.469-2.025.085-2.457-1-.117-.294-.092-.567-.049-.858-.013-.436-.082-.942-.073-1.347l.035-1.688c.006-.26.016-.52.024-.781l-.031.003c-3.793.184-7.613.094-11.413.092l-1.69.002c-1.41.002-2.822-.006-4.23-.06l-.528-.022c-1.054-.05-2.162-.066-3.255-.16.14 1.122.27 2.245.385 3.369.11 1.066-.99 1.972-1.97 1.972-1.165 0-1.832-.916-1.971-1.972-.658-4.979-.928-10.004-1.557-14.985-.563-4.462-1.051-8.935-1.548-13.405l-.166-1.49a6167.357 6167.357 0 01-5.268-48.827l-.786-7.612c-.793-7.672-1.591-15.344-2.265-23.028-.384-4.392-.74-8.786-1.073-13.183-.245-3.23-.399-6.442-.499-9.666-.395-.407-.593-1-.418-1.613.103-.358.222-.714.347-1.069l-.023-1.047c-.006-.33.33-.5.598-.446.488-1.182 1.025-2.354 1.474-3.524.726-1.895 1.324-3.937 2.35-5.69zm-40.542 20.48c7.589-4.758 16.622-8.181 25.669-7.812.206.008.264.322.05.37-4.826 1.077-9.705 2.39-14.273 4.3a54.02 54.02 0 00-12.82 7.599c-7.159 5.722-12.724 13.164-16.388 21.553-2.146 4.914-3.65 10.103-4.964 15.293-1.39 5.493-2.536 11.045-3.489 16.63-1.881 11.033-2.977 22.187-3.56 33.36-.592 11.366-.348 22.74-.771 34.108-.073 1.97-2.887 1.931-3.03 0-.958-12.924-.428-26.055.459-38.97.797-11.61 2.188-23.196 4.43-34.62l.194-.99c2.095-10.569 4.622-21.394 9.687-30.965 4.323-8.172 10.999-14.96 18.806-19.856zm105.378 50.512a.12.12 0 01.23 0c.865 2.423.896 5.156 1.126 7.71l.018.196c.22 2.329.386 4.661.54 6.995l.058.875c.62 9.522 1.394 19.032 2.561 28.504 1.163 9.435 2.736 18.805 4.436 28.156.19 1.041-.271 2.102-1.363 2.402-.962.264-2.197-.329-2.4-1.364-1.056-5.367-1.91-10.742-2.671-16.156a396.408 396.408 0 01-2.985-28.716 287.023 287.023 0 01-.6-14.482 96.948 96.948 0 01.14-6.733l.03-.517c.131-2.29.118-4.686.88-6.87zM96.34 266.949c.101-.055.227.058.162.163-1.469 2.389-3.457 4.449-5.378 6.48-2.009 2.121-3.967 4.307-6.017 6.388-1.48 1.503-3.862-.922-2.3-2.3 2.198-1.94 4.494-3.781 6.73-5.677l.978-.829c1.833-1.55 3.721-3.085 5.825-4.225zm69.79-1.196c-.11-.21.141-.379.311-.24 1.186.964 2.248 2.114 3.392 3.132a58.349 58.349 0 003.517 2.865 67.247 67.247 0 003.725 2.64c1.056.694 2.144 1.25 3.25 1.826.511.065.985.317 1.365.793.6.754.664 2.175-.169 2.83l-.149.117c-.971.763-2.124.856-3.08 0-1.068-.956-2.076-2.009-3.102-3.02l-.308-.301a58.108 58.108 0 01-3.19-3.332l-.916-1.044c-1.702-1.942-3.473-4.034-4.646-6.266zm-5.46-111.917c-.197-.13-.075-.482.168-.399l.447.155c1.865.648 3.784 1.367 5.478 2.365 1.82 1.073 3.5 2.35 5.105 3.722 3.322 2.837 6.149 6.326 8.551 9.963 4.82 7.298 7.802 15.655 10.208 24.018 2.567 8.916 4.542 18.025 6.156 27.159a327.332 327.332 0 013.735 28.039c.41 4.625.684 9.254.822 13.895.071 2.388.069 4.774.05 7.163a93.94 93.94 0 00.005 1.842l.024 1.843c.012 1.164.151 2.388-.125 3.526-.446 1.832-3.473 1.49-3.374-.382-.09-.623-.095-1.267-.07-1.912a9.577 9.577 0 00-.048-.254 1.039 1.039 0 01.09-.673c.015-.31.03-.617.034-.92.02-1.23.02-2.454-.015-3.684a619.815 619.815 0 00-.279-7.776 380.53 380.53 0 00-.917-15.524c-1.46-17.98-4.542-36.061-9.72-53.359-2.405-8.032-5.72-15.918-10.475-22.859a60.338 60.338 0 00-7.132-8.57c-2.656-2.657-5.584-5.302-8.718-7.378zM124.841 269.74l.359 2.597c.18 1.298.357 2.597.526 3.897 1.145-.157 2.317-.223 3.42-.32 1.932-.172 3.878-.255 5.815-.335 4.007-.165 8.035-.452 12.046-.432.041 0 .08.003.119.006l.199-5.123-2.819-.004c-2.387-.004-4.775-.024-7.162-.045-2.15-.018-4.302-.021-6.452-.066l-.922-.022c-1.63-.044-3.43.047-5.129-.153zm22.72-7.436a4.73 4.73 0 01-.356.03c-.558.024-1.121.008-1.68.012-1.19.01-2.378.019-3.568.019-2.379 0-4.757.014-7.136.042-2.449.03-4.895.073-7.344.077-1.187.003-2.37-.029-3.555-.062.191 1.686.392 3.37.613 5.052 1.842-.25 3.823-.124 5.623-.14l.234-.004c2.457-.042 4.916-.011 7.373-.008 2.528.003 5.056.011 7.584.032l2.077.017.004-.105c.061-1.652.1-3.306.131-4.962zm-24.553-8.066c.23 1.99.446 3.984.667 5.977a9.22 9.22 0 01.445-.058 84.603 84.603 0 013.567-.305c2.377-.147 4.753-.225 7.134-.289a578.98 578.98 0 017.346-.15c1.19-.017 2.379-.015 3.568-.007.559.004 1.122-.014 1.68.024.066.004.13.011.192.018l.042-2.992.023-1.496c-1.839.114-3.708.07-5.546.07l-.424.002c-2.308.01-4.618-.021-6.927-.07-2.381-.049-4.758-.127-7.136-.28a62.699 62.699 0 01-2.877-.249l-.479-.055c-.417-.049-.846-.088-1.275-.14zm24.854-8.444c-4.429.351-8.834.498-13.275.542l-.666.006c-3.924.03-7.88.191-11.814.087l.706 6.12c.563-.027 1.13-.027 1.68-.047a99.29 99.29 0 013.356-.053c2.309-.005 4.618.015 6.926.01 2.38-.005 4.758-.045 7.137-.09 1.929-.036 3.878-.181 5.812-.176l.138-6.4zm.187-8.702c-.513.17-1.119.18-1.783.211l-1.715.086c-.794.039-1.589.075-2.384.105-2.65.097-5.3.187-7.95.272-2.715.086-5.443.136-8.159.05a76.598 76.598 0 01-3.976-.223c-.328-.027-.662-.045-.997-.069.309 2.703.619 5.405.93 8.107 3.914-.48 7.86-.78 11.769-1.277l3.535-.451c3.534-.452 7.064-.894 10.61-1.267l.12-5.544zm.189-8.799c-.753.186-1.611.177-2.334.223l-.134.009a80.62 80.62 0 01-4.117.19c-2.692.066-5.385.1-8.078.116l-1.619.01c-2.158.012-4.315.018-6.474-.033-1.385-.032-2.767-.1-4.15-.169-.415-.02-.839-.034-1.264-.056.29 2.559.582 5.117.873 7.675.455-.072.912-.127 1.347-.2a70.111 70.111 0 013.352-.474c2.433-.292 4.878-.502 7.323-.68 2.51-.181 5.02-.335 7.53-.511l1.778-.125c.593-.041 1.185-.081 1.778-.118 1.012-.062 2.19.008 3.193-.212.272-.113.574-.14.876-.075l.12-5.57zm.228-10.298c-.26.33-.65.504-1.114.564-2.417.314-4.895.364-7.333.512l-.43.027c-2.516.166-5.033.296-7.552.43-2.587.137-5.173.25-7.762.34a69.54 69.54 0 01-3.305.028l-.472-.007c-.452-.007-.925-.006-1.4-.022.263 2.393.528 4.785.797 7.177.484-.053.967-.093 1.437-.143 1.383-.146 2.764-.29 4.15-.4 2.626-.207 5.255-.331 7.886-.462 2.692-.133 5.386-.222 8.079-.348a86.717 86.717 0 003.912-.257c.912-.083 1.996-.394 2.947-.28.052-2.387.106-4.773.16-7.16zm.212-9.226a1.06 1.06 0 01-.148.183c-1.064 1.052-2.375.97-3.785 1.081l-.086.007a348.65 348.65 0 01-4.148.327c-2.766.2-5.536.34-8.306.464-2.834.127-5.686.215-8.523.157-1.817-.037-3.72-.03-5.572-.208.284 2.635.57 5.27.859 7.904.52-.098 1.045-.173 1.542-.252 1.252-.197 2.505-.395 3.764-.54 2.515-.29 5.032-.56 7.552-.805 2.156-.209 4.311-.421 6.468-.612l1.295-.112c2.574-.217 5.18-.574 7.762-.627.426-.008.907.223 1.15.589l.176-7.556zm.179-7.468c-.657.08-1.366.034-1.972.054-1.534.05-3.068.097-4.601.142l-9.203.272c-3.134.092-6.278.161-9.413.117-1.378-.02-2.763-.022-4.142-.097l-.459-.027c-.567-.038-1.263-.044-1.943-.113l.802 7.437c1.844-.266 3.745-.366 5.573-.522l.39-.035c2.697-.246 5.407-.408 8.108-.591 2.772-.188 5.539-.416 8.306-.649 1.383-.116 2.766-.232 4.148-.36l.171-.016c1.306-.136 2.534-.427 3.69.343a1.2 1.2 0 01.392.432c.05-2.13.1-4.258.153-6.387zm.214-8.68a626.9 626.9 0 01-16.819.473c-3.157.042-6.31.012-9.467-.054a74.414 74.414 0 01-4.117-.199l-.512-.04c-.65-.056-1.334-.095-2.014-.16.281 2.556.56 5.113.837 7.671.67-.124 1.368-.182 1.955-.257l.133-.017c1.457-.201 2.928-.318 4.392-.447 2.852-.251 5.717-.413 8.576-.55 2.927-.142 5.856-.261 8.784-.391l2.929-.131 1.464-.064c.697-.03 1.394-.057 2.091-.086.344-.014.702-.061 1.046-.043l.098-.014a6.12 6.12 0 01.122-.014 1.38 1.38 0 01.301-.175l.065-.025.136-5.476zm-33.848-8.224c.26 2.302.518 4.604.772 6.907.799-.092 1.608-.142 2.371-.21a106.91 106.91 0 014.63-.33l3.085-.144a633.24 633.24 0 016.171-.262c5.633-.206 11.265-.442 16.895-.73.04-1.56.08-3.123.122-4.684-.27.29-.66.48-1.173.478-5.91-.015-11.825.019-17.734-.078-2.958-.05-5.913-.12-8.867-.273a50.527 50.527 0 01-4.334-.424c-.612-.085-1.282-.145-1.938-.25zm-.946-8.202c.278 2.357.55 4.716.819 7.075.734-.13 1.492-.2 2.177-.294 1.47-.2 2.951-.36 4.433-.443 2.883-.163 5.768-.245 8.656-.307 5.909-.125 11.824-.124 17.734-.171.555-.005.967.215 1.238.543.04-1.472.084-2.945.129-4.417-.571-.06-1.137-.146-1.66-.183-1.61-.112-3.22-.215-4.832-.307a730.852 730.852 0 00-10.09-.504c-3.365-.147-6.731-.29-10.097-.414l-1.472-.054c-2.34-.087-4.721-.197-7.035-.524zm-1.058-8.88c.289 2.387.574 4.776.858 7.165l.086.739c2.815-.547 5.782-.708 8.621-.829 3.367-.143 6.727-.217 10.097-.206 3.366.01 6.727.09 10.09.229 1.681.069 3.361.15 5.041.24.462.026 1.003.012 1.56.02.013-.375.023-.75.036-1.126l.153-4.56c-1.136.583-2.613.818-3.755 1.067l-.13.029c-1.885.423-3.81.698-5.734.866-3.779.33-7.597.206-11.372-.113l-.661-.057c-3.315-.287-6.752-.652-9.966-1.472-1.53-.391-3.113-.938-4.485-1.73-.143-.083-.29-.17-.44-.263zm31.92-28.38c.032-.13.226-.159.29-.038.446.849.612 1.867.922 2.776.333.977.644 1.962 1.012 2.927a40.066 40.066 0 002.758 5.824c1.07 1.85-1.928 3.17-2.716 1.145-.814-2.09-1.482-4.251-1.887-6.46-.197-1.078-.373-2.17-.43-3.265-.05-.94-.182-1.992.05-2.909z"
          fill={props.color}
        />
        <path
          d="M163.535 85.432c-1.912-8.064-6.092-15.568-12.785-21.633-20.14-19.919-57.125-9.107-56.957 20.91-.723 3.505-1.016 7.11-.777 10.686.1 1.525.76 3.654-.128 5.027-2 2.568-3.162 4.462-2.481 7.878.568 2.984 2.598 5.097 5.337 6.22 1.642.472 3.2 1.5 3.81 3.065 3.655 6.696 6.364 12.266 12.128 16.83 1.487 1.175 16.742 8.222 21.769 8.222 14.715 0 33.26-5.333 33.569-21.776.053-3.611-.58-7.265-.978-10.848-.967-8.176-.626-16.65-2.507-24.58z"
          fill="#FFF"
        />
        <path
          d="M163.204 81.399c.005-.1.147-.122.175-.024.547 1.941.857 3.919 1.285 5.89.412 1.9.8 3.804 1.124 5.72.611 3.615 1.126 7.24 1.605 10.874l.119.909c.832 6.395 2.206 13.057 1.004 19.489-1.025 5.489-4.463 9.912-8.893 13.155-4.194 3.071-9.28 5.042-14.33 6.162-5.42 1.203-11.844 1.562-16.254-2.414-1.765-1.592.641-4.751 2.556-3.314 4.497 3.372 10.218 2.378 15.293 1.036l.153-.04c4.454-1.187 8.937-2.986 12.473-6.02 3.91-3.356 5.842-8.012 6.065-13.12.126-2.869-.142-5.735-.43-8.587l-.032-.317c-.331-3.262-.679-6.523-1-9.786-.292-2.976-.544-5.969-.677-8.958l-.063-1.507c-.13-3.04-.304-6.123-.173-9.148zm-52.741-25.255a38.783 38.783 0 0123.872-3.896c7.829 1.23 15.014 5.271 20.385 11.066 2.622 2.83 4.949 6.102 6.436 9.678.74 1.776 1.318 3.629 1.626 5.532.158.978.314 1.992.344 2.983.027.919-.243 1.78-.21 2.714.004.146-.22.174-.254.034-.254-1.041-.867-1.828-1.251-2.817a38.609 38.609 0 00-.946-2.177l-.285-.616c-.828-1.79-1.817-3.506-2.796-5.215a36.994 36.994 0 00-7.46-9.215c-5.2-4.636-11.87-7.63-18.831-8.168-7.226-.56-14.555 1.163-20.725 4.98-6.17 3.816-10.836 9.749-13.259 16.58a36.618 36.618 0 00-2.054 10.69c-.08 1.848-.005 3.712.125 5.557l.064.88c.075 1.054.127 2.105-.03 3.135 1.112-.347 2.279-.491 3.45-.32 1.74.256 2.779.97 3.56 2.525a.09.09 0 01-.122.121c-1.012-.505-2.65-.239-3.72.026-1.116.276-2.12.755-3.068 1.403-1.753 1.198-3.127 3.055-3.464 5.185-.326 2.058.519 4.141 1.937 5.616.73.76 1.603 1.416 2.58 1.825 1.186.497 2.36.482 3.409 1.302.648.507.492 1.375.052 1.938 2.213 2.428 4.176 5.084 6.39 7.522a123.915 123.915 0 013.026 3.427l.367.439c.982 1.185 2.543 2.437 2.992 3.927.279.927-.714 2.14-1.717 1.718-1.539-.649-2.638-2.335-3.678-3.629l-.067-.084a35.571 35.571 0 01-2.944-4.239l-.291-.488c-1.601-2.693-3.188-5.486-4.209-8.445a1.57 1.57 0 01-.214.186c-1.47 1.046-3.608.242-5.076-.438a10.8 10.8 0 01-3.648-2.768c-2.155-2.528-3.148-5.802-2.428-9.083.61-2.78 2.535-5.483 5.06-6.89-1.166-1.341-1.648-3.15-1.97-4.92-.41-2.257-.491-4.571-.38-6.86.222-4.561 1.395-9.056 3.209-13.232 3.245-7.472 8.981-13.722 16.213-17.489zm-15.402 49.86c1.536-.288 2.967-.357 4.449.293 1.607.705 2.737 1.87 3.789 3.235 1.196 1.553-1.87 3.249-2.643 1.188l-.022-.064c-.207-.61-.578-1.2-1.048-1.743-.14.216-.33.406-.55.515-.269.132-.678.04-.743-.302-.071-.38.008-.84.227-1.163l.03-.044c-1.065-.857-2.347-1.484-3.489-1.686-.114-.02-.113-.208 0-.229z"
          fill={props.color}
        />
        <path
          d="M132.112 117.319c.044-.041.114-.056.168-.022.914.578 1.022 2.523 1.033 3.646.378.098.751.21 1.105.289.75.166 1.504.31 2.257.463l.564.116c1.886.398 3.807.692 5.728.84 1.865.142 3.785.195 5.644-.046a15.058 15.058 0 002.365-.506c.912-.272 1.638-.723 2.487-1.118 2.124-.99 3.904 1.91 1.86 3.183-1.755 1.092-4.149 1.486-6.175 1.655-2.07.173-4.132-.017-6.178-.345-2.211-.354-4.377-.898-6.474-1.687a22.584 22.584 0 01-2.583-1.18l-.228-.122-.43-.228c-.158 1.4-.61 2.753-1.157 4.054l-.012-.023c-.3 1.026-1.38 1.66-2.454 1.208-1.261-.532-1.357-1.927-.623-2.918l.035-.046c.863-1.11 1.403-2.488 1.873-3.801.241-.673.464-1.363.658-2.051.14-.498.145-1 .537-1.361zm32.5-11.154c-.748 2.26-2.378 4-4.65 4.766-2.25.758-4.754.482-7.054.072a33.293 33.293 0 01-1.523-.305c.417.259.785.622 1.137 1.007.52.568.993 1.167 1.137 1.878.142.706-.082 1.243-.49 1.648-.63.623-1.643.959-2.502 1.145-1.923.415-3.849.35-5.762-.076-.489-.108-.82-.37-1.006-.712-.226-.416-.245-.932-.115-1.402.13-.47.41-.904.816-1.143.334-.198.753-.252 1.227-.094.953.317 1.9.527 2.906.552a11.174 11.174 0 001.999-.133 18.308 18.308 0 01-.868-1.264 14.79 14.79 0 01-1.087-2.114 17.929 17.929 0 01-.319-.814 5.636 5.636 0 01-1.556-2.042c-.974-2.17-.815-4.862-.224-7.115.473-1.806 1.519-3.476 2.9-4.611.241-.397.4-.638.595-.84.794-.827 1.902-1.384 2.983-1.723 2.414-.757 5.043-.214 7.089 1.228 1.89 1.332 3.369 3.328 4.168 5.549.757 2.103.905 4.41.199 6.543zM131.73 92.43c2.87-.024 5.792.823 8.122 2.52 2.228 1.624 3.978 4.022 3.976 6.877-.002 2.78-1.488 5.514-3.135 7.667-1.85 2.416-4.267 3.581-7.306 3.608-1.58.014-3.17-.126-4.739-.318l-.841-.106c-1.159-.15-2.33-.326-3.428-.725-5.227-1.897-5.39-8.742-3.453-13.117 1.495-3.379 5.279-6.673 9.051-6.278.569-.08 1.153-.123 1.753-.128zm4.849 3.22c-3.595-1.615-7.964-1.132-11.45.59-1.382 1.509-2.392 3.409-2.8 5.153-.437 1.863-.373 3.869.283 5.673.8 2.204 2.773 2.75 4.9 3.088l.826.13.347.052c2.09.312 4.376.555 6.385.165 2.239-.436 3.66-2.245 4.78-4.1l.052-.088c1.162-1.943 2.135-4.307 1.16-6.535-.829-1.893-2.639-3.3-4.483-4.129zm21.22.562a4.843 4.843 0 00-3.974-.35c-.573.196-1.068.515-1.548.873l-.192.145c-.59.454-1.142.683-1.585 1.296l-.057.082a1.01 1.01 0 01-.971.423c-.415 1.145-.586 2.383-.59 3.602v.161l.003.165c.026 1.44.277 3.203 1.41 4.169 1.034.88 2.599 1.092 3.996 1.214l1.077.09.286.022c1.473.102 3.087.067 4.32-.805 1.076-.76 1.583-2.049 1.714-3.322.31-3.007-1.21-6.28-3.89-7.765zm-26.856.277c1.98-1.01 4.358-.757 6.035.51-.15.03-.296.066-.442.14-.38.19-.617.573-.707.98a.867.867 0 00.59 1.04c.395.125.863.183 1.23-.057.192-.126.326-.291.414-.5l.012-.03.016-.023.006-.01c.001-.004-.006.003-.017.02.012-.025.022-.051.032-.078.016-.031.03-.063.042-.096.022-.018.041-.039.06-.06.306.47.545 1 .697 1.589.974 3.782-3.023 7.707-6.594 8.1a5.59 5.59 0 01-3.601-.807c.009-.013.02-.024.028-.037.41.074.9-.11 1.049-.568.38-1.167-.01-2.533-1.282-2.915-.818-.245-1.656.026-2.24.586a6.444 6.444 0 01-.392-3.524c.295-1.724 1.334-3.276 2.951-3.993.788-.35 1.466-.423 2.113-.267zm20.849 2.334l.06-.095c.612-.942 1.781-2.097 2.993-1.78.17.045.338.117.488.21a2.97 2.97 0 011.936.413l-.016.04a.928.928 0 00.079.672c.116.228.281.444.505.575.154.09.334.136.511.133.26-.005.489-.12.676-.294a.81.81 0 00.213-.376c.092.089.182.187.268.3 1.405 1.848 1.21 4.818-.438 6.466-.066.066-.137.127-.207.188a4.102 4.102 0 01-2.94 1.674 4.415 4.415 0 01-3.174-.918.682.682 0 00.194-.151 2.068 2.068 0 00.43-.704l.031-.08c.006-.015.053-.15.04-.126l-.003.005.017-.039c.157-.393.094-.842-.28-1.089l-.041-.026a.858.858 0 00-.427-.105c-.381-.467-.95-.574-1.482-.438l-.019-.15a1.788 1.788 0 01-.007-.076c-.413-1.37-.214-2.927.593-4.23zm-18.337-13.79l.137-.022c1.037-.15 1.742.023 2.416.91.321.422.222 1.06 0 1.492-.718 1.395-2.693 1.106-4.023 1.383-1.299.27-2.594.639-3.81 1.174a24.828 24.828 0 00-3.538 1.931c-1.027.668-1.958 1.673-3.13 2.061-.053.018-.117-.03-.114-.086.084-1.334 1.198-2.559 2.06-3.509.999-1.099 2.213-2.074 3.477-2.85a18.855 18.855 0 014.174-1.918 17.257 17.257 0 012.35-.567zm15.797 1.811c1.306-1.91 4.552-1.544 6.467-1.033 2.401.64 5.003 1.933 6.687 3.805 1.508 1.678-.748 3.857-2.444 2.446l-.453-.376-.29-.238c-1.302-1.064-2.591-2.026-4.178-2.736-1.86-.83-3.745-1.236-5.712-1.679-.077-.017-.122-.122-.077-.189z"
          fill={props.color}
        />
        <g fill={props.color}>
          <path d="M129.449 129.598c1.71-4.008 5.444-6.954 9.742-8.032 3.156-.789 6.469-.763 9.686-.45 1.686.163 3.494.296 5.083.922 1.357.535 2.462 1.547 3.293 2.734.99 1.407 1.663 3.017 2.136 4.667.067.235.13.471.189.709-.206 1.245-.642 2.305-1.795 3.087-1.125.765-2.467 1.078-3.805 1.189a5.984 5.984 0 01-.375-.195c-2.085-1.194-3.552-4.016-6.184-3.634-2.349.341-3.895 3.298-5.292 5.031-4.483.523-8.963-.825-12.611-3.39a7.441 7.441 0 01-.067-2.638m33.176-3.04a17.294 17.294 0 00-1.346-2.901 16.495 16.495 0 00-7.714-6.843c-7.631-3.268-17.505-.964-23.668 4.397-2.105 1.833-4.234 4.526-4.878 7.423a1.077 1.077 0 00-.523.279c-4.453-2.805-9.038-5.503-12.626-9.39-2.606-2.825-4.418-6.168-5.528-9.84-.09-.303-.578-.259-.563.076l.013.234c-.047-.144-.266-.07-.283.07-.597 4.462-1.344 9.193-.656 13.678.411 2.677 1.626 4.636 3.25 6.752 1.742 2.268 3.712 4.377 5.727 6.4 1.279 1.284 2.614 2.765 4.18 3.707 1.82 1.094 3.886 1.925 5.83 2.77a75.753 75.753 0 006.027 2.346c4.087 1.383 8.311 2.34 12.609 2.759 3.441.334 7.374.698 10.672-.597 2.527-.992 4.567-2.786 6.186-4.945 1.761-2.35 3.154-5.028 3.924-7.851.8-2.933-.464-8.052-.633-8.525" />
        </g>
      </g>
    </svg>
  )
}

export default SvgPeep3
