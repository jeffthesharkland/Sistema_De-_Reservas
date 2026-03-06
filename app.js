const FX_USD = 7.8;
const BRAND_NAME = "CINBEPOLIS";
const MAX_TICKETS = 10;
const MAX_SNACK_QTY = 20;
const BULK_DISCOUNT_THRESHOLD = 5;
const BULK_DISCOUNT_RATE = 0.1;

const movies = [
  {
    id: "m1",
    category: "Peliculas muy esperadas",
    title: "The Odyssey",
    schedule: "13:30",
    priceGTQ: 58,
    synopsis: "Pelicula epica dirigida por Christopher Nolan sobre el viaje de Odiseo despues de la Guerra de Troya.",
    poster: "https://picsum.photos/seed/odyssey/600/900"
  },
  {
    id: "m2",
    category: "Peliculas muy esperadas",
    title: "Narnia: El Sobrino del Mago",
    schedule: "16:10",
    priceGTQ: 52,
    synopsis: "Reinicio de la saga de fantasia basada en la novela de C. S. Lewis.",
    poster: "https://picsum.photos/seed/narnia/600/900"
  },
  {
    id: "m3",
    category: "Peliculas muy esperadas",
    title: "Masters of the Universe",
    schedule: "19:20",
    priceGTQ: 60,
    synopsis: "Nueva adaptacion de He-Man y el conflicto por el control del planeta Eternia.",
    poster: "https://picsum.photos/seed/eternia/600/900"
  },
  {
    id: "m4",
    category: "Accion y aventura",
    title: "Cliffhanger",
    schedule: "12:40",
    priceGTQ: 48,
    synopsis: "Reboot de accion en montana con una mision de rescate de alto riesgo.",
    poster: "https://picsum.photos/seed/cliffhanger/600/900"
  },
  {
    id: "m5",
    category: "Accion y aventura",
    title: "Archangel",
    schedule: "14:50",
    priceGTQ: 50,
    synopsis: "Thriller sobre un exsoldado que protege su comunidad frente a una amenaza armada.",
    poster: "https://picsum.photos/seed/archangel/600/900"
  },
  {
    id: "m6",
    category: "Accion y aventura",
    title: "Trinidad",
    schedule: "18:00",
    priceGTQ: 47,
    synopsis: "Western del siglo XIX ambientado en el Viejo Oeste con duelos y traiciones.",
    poster: "https://picsum.photos/seed/trinidad/600/900"
  },
  {
    id: "m7",
    category: "Terror y suspenso",
    title: "Resident Evil",
    schedule: "20:10",
    priceGTQ: 55,
    synopsis: "Nuevo reinicio de la saga inspirada en el videojuego de supervivencia.",
    poster: "https://picsum.photos/seed/re/600/900"
  },
  {
    id: "m8",
    category: "Terror y suspenso",
    title: "The Mummy",
    schedule: "22:10",
    priceGTQ: 53,
    synopsis: "Version renovada del clasico sobrenatural con una maldicion ancestral.",
    poster: "https://picsum.photos/seed/mummy/600/900"
  },
  {
    id: "m9",
    category: "Comedia",
    title: "Scary Movie 6",
    schedule: "17:40",
    priceGTQ: 45,
    synopsis: "Nueva entrega de la saga de parodias sobre terror y cultura pop.",
    poster: "https://picsum.photos/seed/scary6/600/900"
  },
  {
    id: "m10",
    category: "Superheroes y grandes franquicias",
    title: "Avengers: Doomsday",
    schedule: "19:00",
    priceGTQ: 65,
    synopsis: "Entrega esperada de gran presupuesto con los heroes mas poderosos unidos.",
    poster: "https://picsum.photos/seed/avengers/600/900"
  },
  {
    id: "m11",
    category: "Superheroes y grandes franquicias",
    title: "Supergirl",
    schedule: "15:20",
    priceGTQ: 56,
    synopsis: "Nueva pelicula centrada en la heroina kryptoniana y su papel en la Tierra.",
    poster: "https://picsum.photos/seed/supergirl/600/900"
  },
  {
    id: "m12",
    category: "Superheroes y grandes franquicias",
    title: "Spider-Man: Brand New Day",
    schedule: "21:00",
    priceGTQ: 62,
    synopsis: "Nueva etapa del heroe arana con enemigos ineditos y riesgos globales.",
    poster: "https://picsum.photos/seed/spiderman/600/900"
  },
  {
    id: "m13",
    category: "Otras peliculas anunciadas para 2026",
    title: "Toy Story 5",
    schedule: "11:20",
    priceGTQ: 44,
    synopsis: "Regreso de los juguetes en una aventura familiar con nuevos personajes.",
    poster: "https://picsum.photos/seed/toystory/600/900"
  },
  {
    id: "m14",
    category: "Otras peliculas anunciadas para 2026",
    title: "Minions 3",
    schedule: "13:10",
    priceGTQ: 42,
    synopsis: "Comedia animada con los minions en una nueva mision absurda.",
    poster: "https://picsum.photos/seed/minions/600/900"
  },
  {
    id: "m15",
    category: "Otras peliculas anunciadas para 2026",
    title: "The Super Mario Bros. Movie 2",
    schedule: "15:00",
    priceGTQ: 46,
    synopsis: "Segunda aventura animada de Mario y Luigi en el Reino Champinon.",
    poster: "https://picsum.photos/seed/mario2/600/900"
  },
  {
    id: "m16",
    category: "Otras peliculas anunciadas para 2026",
    title: "Project Hail Mary",
    schedule: "18:30",
    priceGTQ: 57,
    synopsis: "Ciencia ficcion sobre una mision espacial para salvar a la humanidad.",
    poster: "https://picsum.photos/seed/hailmary/600/900"
  },
  {
    id: "m17",
    category: "Otras peliculas anunciadas para 2026",
    title: "The Hunger Games: Sunrise on the Reaping",
    schedule: "20:40",
    priceGTQ: 59,
    synopsis: "Precuela del universo Hunger Games con enfoque en los juegos del pasado.",
    poster: "https://picsum.photos/seed/hungergames/600/900"
  }
];

const baseOccupiedPatterns = [
  ["A1", "A2", "B6", "C3", "D7", "E1"],
  ["A5", "B2", "B3", "C8", "D5", "F4"],
  ["A9", "A10", "C2", "D2", "E8", "G6"],
  ["B1", "B9", "C4", "D4", "F2", "G8"]
];

const occupiedByMovie = movies.reduce((acc, movie, index) => {
  acc[movie.id] = new Set(baseOccupiedPatterns[index % baseOccupiedPatterns.length]);
  return acc;
}, {});

const snackItems = [
  { id: "c1", kind: "combo", name: "Combo Mega Palomitas", priceGTQ: 55, emoji: "🍿" },
  { id: "c2", kind: "combo", name: "Combo Nachos + Soda", priceGTQ: 48, emoji: "🧀" },
  { id: "c3", kind: "combo", name: "Combo Hot Dog", priceGTQ: 44, emoji: "🌭" },
  { id: "c4", kind: "combo", name: "Combo Pareja", priceGTQ: 68, emoji: "🥤" },
  { id: "s1", kind: "snack", name: "M&M's", priceGTQ: 20, emoji: "🍫" },
  { id: "s2", kind: "snack", name: "Gomitas surtidas", priceGTQ: 18, emoji: "🍬" },
  { id: "s3", kind: "snack", name: "Chips picantes", priceGTQ: 16, emoji: "🥔" },
  { id: "s4", kind: "snack", name: "Churros mini", priceGTQ: 22, emoji: "🍩" },
  { id: "s5", kind: "snack", name: "Mani con chocolate", priceGTQ: 19, emoji: "🥜" }
];

const state = {
  movieId: movies[0].id,
  selectedSeats: new Set(),
  snacksEnabled: false,
  snackQty: {},
  reservation: null
};

const dom = {
  movieSelect: document.getElementById("movieSelect"),
  moviePoster: document.getElementById("moviePoster"),
  movieTitle: document.getElementById("movieTitle"),
  movieSchedule: document.getElementById("movieSchedule"),
  moviePrice: document.getElementById("moviePrice"),
  movieSynopsis: document.getElementById("movieSynopsis"),
  seatGrid: document.getElementById("seatGrid"),
  snackToggle: document.getElementById("snackToggle"),
  snackPanel: document.getElementById("snackPanel"),
  comboList: document.getElementById("comboList"),
  snackList: document.getElementById("snackList"),
  ticketCount: document.getElementById("ticketCount"),
  ticketBaseGTQ: document.getElementById("ticketBaseGTQ"),
  ticketBaseUSD: document.getElementById("ticketBaseUSD"),
  ticketSubtotalGTQ: document.getElementById("ticketSubtotalGTQ"),
  ticketSubtotalUSD: document.getElementById("ticketSubtotalUSD"),
  ticketDiscountGTQ: document.getElementById("ticketDiscountGTQ"),
  ticketDiscountUSD: document.getElementById("ticketDiscountUSD"),
  snackTotalGTQ: document.getElementById("snackTotalGTQ"),
  snackTotalUSD: document.getElementById("snackTotalUSD"),
  totalGTQ: document.getElementById("totalGTQ"),
  totalUSD: document.getElementById("totalUSD"),
  paymentForm: document.getElementById("paymentForm"),
  customerName: document.getElementById("customerName"),
  customerEmail: document.getElementById("customerEmail"),
  cardNumber: document.getElementById("cardNumber"),
  cardDate: document.getElementById("cardDate"),
  cardCvv: document.getElementById("cardCvv"),
  reservationState: document.getElementById("reservationState"),
  reservationCard: document.getElementById("reservationCard"),
  cancelForm: document.getElementById("cancelForm"),
  cancelReason: document.getElementById("cancelReason"),
  cancelBtn: document.getElementById("cancelBtn"),
  pdfBtn: document.getElementById("pdfBtn"),
  themeToggle: document.getElementById("themeToggle")
};

function formatGTQ(value) {
  return `Q ${value.toFixed(2)}`;
}

function formatUSD(value) {
  return `$ ${value.toFixed(2)}`;
}

function showErrorAlert(text) {
  if (window.Swal) {
    Swal.fire({
      icon: "error",
      title: "Ups...",
      text,
      footer: '<a href="#">Por que ocurre este problema?</a>'
    });
    return;
  }
  alert(text);
}

function showSuccessPaymentAlert() {
  if (window.Swal) {
    Swal.fire({
      title: "Pago realizado",
      icon: "success",
      text: "Tu reserva fue confirmada con exito.",
      draggable: true
    });
    return;
  }
  alert("Pago exitoso. Reserva confirmada.");
}

function movieEmoji(title) {
  const t = title.toLowerCase();
  if (t.includes("odyssey")) return "🏛️";
  if (t.includes("narnia")) return "🦁";
  if (t.includes("masters of the universe")) return "🗡️";
  if (t.includes("cliffhanger")) return "⛰️";
  if (t.includes("archangel")) return "🛡️";
  if (t.includes("trinidad")) return "🤠";
  if (t.includes("resident evil")) return "🧟";
  if (t.includes("mummy")) return "🧻";
  if (t.includes("scary movie")) return "😂";
  if (t.includes("avengers")) return "🦸";
  if (t.includes("supergirl")) return "🦸‍♀️";
  if (t.includes("spider-man")) return "🕷️";
  if (t.includes("toy story")) return "🧸";
  if (t.includes("minions")) return "🍌";
  if (t.includes("super mario")) return "🍄";
  if (t.includes("hail mary")) return "🚀";
  if (t.includes("hunger games")) return "🏹";
  return "🎬";
}

function fallbackPoster(title) {
  const emoji = movieEmoji(title);
  const safeTitle = title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="900">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#0b2f6b"/>
          <stop offset="100%" stop-color="#1f6fe3"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <text x="50%" y="42%" text-anchor="middle" font-size="150">${emoji}</text>
      <text x="50%" y="56%" text-anchor="middle" fill="#f5c74c" font-family="Arial, sans-serif" font-size="34">Poster no disponible</text>
      <text x="50%" y="63%" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="30">${safeTitle}</text>
    </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function loadMoviePosters() {
  movies.forEach((movie) => {
    movie.poster = fallbackPoster(movie.title);
  });
  renderMoviePreview();
}

function getMovie() {
  return movies.find((m) => m.id === state.movieId);
}

function buildMovieOptions() {
  dom.movieSelect.innerHTML = "";
  const groups = movies.reduce((acc, movie) => {
    if (!acc[movie.category]) acc[movie.category] = [];
    acc[movie.category].push(movie);
    return acc;
  }, {});

  Object.entries(groups).forEach(([category, items]) => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = category;
    items.forEach((movie) => {
      const option = document.createElement("option");
      option.value = movie.id;
      option.textContent = `${movie.title} - ${movie.schedule} - ${formatGTQ(movie.priceGTQ)}`;
      optgroup.appendChild(option);
    });
    dom.movieSelect.appendChild(optgroup);
  });
}

function renderMoviePreview() {
  const movie = getMovie();
  dom.moviePoster.src = movie.poster;
  dom.moviePoster.onerror = () => {
    dom.moviePoster.src = fallbackPoster(movie.title);
  };
  dom.movieTitle.textContent = movie.title;
  dom.movieSchedule.textContent = `Categoria: ${movie.category} | Horario: ${movie.schedule}`;
  dom.moviePrice.textContent = `Precio: ${formatGTQ(movie.priceGTQ)} / ${formatUSD(movie.priceGTQ / FX_USD)}`;
  dom.movieSynopsis.textContent = movie.synopsis;
  dom.movieSelect.value = movie.id;
}

function seatId(row, col) {
  return `${String.fromCharCode(65 + row)}${col + 1}`;
}

function renderSeats() {
  dom.seatGrid.innerHTML = "";
  const occupied = occupiedByMovie[state.movieId];
  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 10; col += 1) {
      const id = seatId(row, col);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "seat";
      btn.title = `Asiento ${id}`;
      btn.dataset.seat = id;
      if (occupied.has(id)) {
        btn.classList.add("occupied");
        btn.disabled = true;
      } else if (state.selectedSeats.has(id)) {
        btn.classList.add("selected");
      }
      btn.addEventListener("click", () => {
        toggleSeat(id);
      });
      dom.seatGrid.appendChild(btn);
    }
  }
}

function renderSnackList(container, kind) {
  container.innerHTML = "";
  snackItems
    .filter((item) => item.kind === kind)
    .forEach((item) => {
      const qty = state.snackQty[item.id] || 0;
      const card = document.createElement("article");
      card.className = "snack-item";
      card.innerHTML = `
        <div class="snack-top">
          <p><strong>${item.emoji} ${item.name}</strong></p>
          <p>${formatGTQ(item.priceGTQ)}</p>
        </div>
        <div class="qty-controls">
          <button type="button" class="qty-btn" data-action="minus" data-id="${item.id}">-</button>
          <span class="qty-value" id="qty-${item.id}">${qty}</span>
          <button type="button" class="qty-btn" data-action="plus" data-id="${item.id}">+</button>
        </div>
      `;
      container.appendChild(card);
    });
}

function renderSnackCatalog() {
  const hasSeats = state.selectedSeats.size > 0;
  dom.snackPanel.classList.toggle("snack-disabled", !hasSeats || !state.snacksEnabled);
  renderSnackList(dom.comboList, "combo");
  renderSnackList(dom.snackList, "snack");
}

function getSnackTotals() {
  if (!state.snacksEnabled) return { qty: 0, totalGTQ: 0 };
  return snackItems.reduce(
    (acc, item) => {
      const qty = state.snackQty[item.id] || 0;
      acc.qty += qty;
      acc.totalGTQ += qty * item.priceGTQ;
      return acc;
    },
    { qty: 0, totalGTQ: 0 }
  );
}

function syncSnackAvailability() {
  const hasSeats = state.selectedSeats.size > 0;
  dom.snackToggle.disabled = !hasSeats;
  if (!hasSeats) {
    state.snacksEnabled = false;
    state.snackQty = {};
    dom.snackToggle.checked = false;
  }
}

function getTicketPricing(ticketQty, unitPriceGTQ) {
  const baseGTQ = ticketQty * unitPriceGTQ;
  const discountGTQ = ticketQty > BULK_DISCOUNT_THRESHOLD ? baseGTQ * BULK_DISCOUNT_RATE : 0;
  const finalGTQ = baseGTQ - discountGTQ;
  return { baseGTQ, discountGTQ, finalGTQ };
}

function changeSnackQty(itemId, delta) {
  if (!state.snacksEnabled) return;
  const current = state.snackQty[itemId] || 0;
  const next = Math.max(0, Math.min(MAX_SNACK_QTY, current + delta));
  state.snackQty[itemId] = next;
  const qtyLabel = document.getElementById(`qty-${itemId}`);
  if (qtyLabel) qtyLabel.textContent = next;
  updateTotals();
}

function updateTotals() {
  const movie = getMovie();
  const ticketQty = state.selectedSeats.size;
  syncSnackAvailability();
  const ticketPricing = getTicketPricing(ticketQty, movie.priceGTQ);
  const ticketBaseUSD = ticketPricing.baseGTQ / FX_USD;
  const ticketTotalUSD = ticketPricing.finalGTQ / FX_USD;
  const ticketDiscountUSD = ticketPricing.discountGTQ / FX_USD;
  const snacks = getSnackTotals();
  const snackTotalUSD = snacks.totalGTQ / FX_USD;
  const totalGTQ = ticketPricing.finalGTQ + snacks.totalGTQ;
  const totalUSD = totalGTQ / FX_USD;
  dom.ticketCount.textContent = ticketQty;
  dom.ticketBaseGTQ.textContent = formatGTQ(ticketPricing.baseGTQ);
  dom.ticketBaseUSD.textContent = formatUSD(ticketBaseUSD);
  dom.ticketSubtotalGTQ.textContent = formatGTQ(ticketPricing.finalGTQ);
  dom.ticketSubtotalUSD.textContent = formatUSD(ticketTotalUSD);
  dom.ticketDiscountGTQ.textContent = formatGTQ(ticketPricing.discountGTQ);
  dom.ticketDiscountUSD.textContent = formatUSD(ticketDiscountUSD);
  dom.snackTotalGTQ.textContent = formatGTQ(snacks.totalGTQ);
  dom.snackTotalUSD.textContent = formatUSD(snackTotalUSD);
  dom.totalGTQ.textContent = formatGTQ(totalGTQ);
  dom.totalUSD.textContent = formatUSD(totalUSD);
  renderSnackCatalog();
}

function resetPurchaseFlow() {
  state.selectedSeats.clear();
  state.snacksEnabled = false;
  state.snackQty = {};
  dom.snackToggle.checked = false;
  dom.paymentForm.reset();
  renderSeats();
  renderSnackCatalog();
  updateTotals();
}

function toggleSeat(id) {
  if (state.selectedSeats.has(id)) {
    state.selectedSeats.delete(id);
  } else {
    if (state.selectedSeats.size >= MAX_TICKETS) {
      showErrorAlert(`Limite alcanzado: maximo ${MAX_TICKETS} asientos por compra.`);
      return;
    }
    state.selectedSeats.add(id);
  }
  renderSeats();
  updateTotals();
}

function validateCardData() {
  const cardNumberClean = dom.cardNumber.value.replace(/\s+/g, "");
  const dateValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(dom.cardDate.value.trim());
  const cvvValid = /^\d{3,4}$/.test(dom.cardCvv.value.trim());
  return /^\d{16}$/.test(cardNumberClean) && dateValid && cvvValid;
}

function updateReservationState() {
  if (!state.reservation) {
    dom.reservationCard.classList.add("hidden");
    dom.reservationState.textContent = "No hay reserva activa.";
    dom.cancelBtn.disabled = true;
    dom.pdfBtn.disabled = true;
    return;
  }
  dom.reservationCard.classList.remove("hidden");
  const r = state.reservation;
  const snackInfo = r.snacks.length ? ` | Dulceria: ${r.snacks.map((s) => `${s.name} x${s.qty}`).join(", ")}` : "";
  dom.reservationState.textContent = `Reserva activa: ${r.movie.title} (${r.movie.schedule}) | Asientos: ${r.seats.join(", ")}${snackInfo} | Total: ${formatGTQ(r.totalGTQ)} (${formatUSD(r.totalUSD)})`;
  dom.cancelBtn.disabled = false;
  dom.pdfBtn.disabled = false;
}

function processPayment(event) {
  event.preventDefault();
  if (!state.selectedSeats.size) {
    showErrorAlert("Selecciona al menos un asiento.");
    return;
  }
  if (state.selectedSeats.size > MAX_TICKETS) {
    showErrorAlert(`Solo puedes comprar hasta ${MAX_TICKETS} asientos por transaccion.`);
    return;
  }
  if (!validateCardData()) {
    showErrorAlert("Datos de pago invalidos. Verifica tarjeta, fecha y CVV.");
    return;
  }

  const movie = getMovie();
  const seats = Array.from(state.selectedSeats).sort();
  const ticketPricing = getTicketPricing(seats.length, movie.priceGTQ);
  const snacks = state.snacksEnabled ? snackItems
    .map((item) => ({ ...item, qty: state.snackQty[item.id] || 0 }))
    .filter((item) => item.qty > 0) : [];
  const snackTotalGTQ = snacks.reduce((sum, item) => sum + item.qty * item.priceGTQ, 0);
  const totalGTQ = ticketPricing.finalGTQ + snackTotalGTQ;
  const totalUSD = totalGTQ / FX_USD;

  const payBtn = dom.paymentForm.querySelector("button[type='submit']");
  payBtn.disabled = true;
  payBtn.textContent = "Procesando...";

  setTimeout(() => {
    seats.forEach((seat) => occupiedByMovie[state.movieId].add(seat));
    state.reservation = {
      customerName: dom.customerName.value.trim(),
      customerEmail: dom.customerEmail.value.trim(),
      movie,
      seats,
      snacks,
      ticketBaseGTQ: ticketPricing.baseGTQ,
      ticketDiscountGTQ: ticketPricing.discountGTQ,
      ticketTotalGTQ: ticketPricing.finalGTQ,
      snackTotalGTQ,
      totalGTQ,
      totalUSD,
      createdAt: new Date().toLocaleString()
    };
    state.selectedSeats.clear();
    state.snacksEnabled = false;
    dom.snackToggle.checked = false;
    state.snackQty = {};
    renderSeats();
    renderSnackCatalog();
    updateTotals();
    updateReservationState();
    payBtn.disabled = false;
    payBtn.textContent = "Pagar y reservar";
    showSuccessPaymentAlert();
  }, 700);
}

async function cancelReservation(event) {
  event.preventDefault();
  if (!state.reservation) return;
  const reason = dom.cancelReason.value;
  let confirmed = true;
  if (window.Swal) {
    const result = await Swal.fire({
      title: "Estas seguro?",
      text: "No podras revertir esta accion.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, cancelar",
      cancelButtonText: "No, volver"
    });
    confirmed = result.isConfirmed;
  } else {
    confirmed = confirm(`Se cancelara tu reserva por: "${reason}". Deseas continuar?`);
  }
  if (!confirmed) return;

  const movieId = state.reservation.movie.id;
  state.reservation.seats.forEach((seat) => occupiedByMovie[movieId].delete(seat));
  state.reservation = null;
  state.selectedSeats.clear();
  state.snacksEnabled = false;
  dom.snackToggle.checked = false;
  state.snackQty = {};
  renderSeats();
  renderSnackCatalog();
  updateTotals();
  updateReservationState();
  if (window.Swal) {
    Swal.fire({
      title: "Reserva cancelada",
      text: `Tu reserva fue cancelada. Motivo: ${reason}`,
      icon: "success"
    });
  } else {
    alert(`Reserva cancelada. Motivo: ${reason}`);
  }
}

function generatePdfInvoice() {
  if (!state.reservation) return;
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert("No fue posible cargar la libreria de PDF.");
    return;
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  const r = state.reservation;
  const now = new Date();
  const dateStr = now.toLocaleDateString("es-GT");
  const timeStr = now.toLocaleTimeString("es-GT", { hour: "2-digit", minute: "2-digit" });
  const reservationId = `CP-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}-${String(now.getTime()).slice(-6)}`;
  const perSeatTicketGTQ = (r.ticketTotalGTQ || 0) / (r.seats.length || 1);
  const perSeatSnackGTQ = (r.snackTotalGTQ || 0) / (r.seats.length || 1);
  const perSeatTotalGTQ = perSeatTicketGTQ + perSeatSnackGTQ;

  r.seats.forEach((seat, idx) => {
    if (idx > 0) doc.addPage("a4", "landscape");
    const rowCode = seat.charAt(0);
    const seatCode = seat.slice(1);
    const barcode = `${String(Math.round(perSeatTotalGTQ)).replace(/\D/g, "")}${now.getTime().toString().slice(-8)}${idx}`;

    const x = 15;
    const y = 18;
    const h = 175;
    const wMain = 194;
    const wStub = 73;
    const splitX = x + wMain;

    doc.setFillColor(241, 244, 250);
    doc.rect(0, 0, 297, 210, "F");

    doc.setFillColor(0, 44, 109);
    doc.roundedRect(x, y, wMain + wStub, h, 4, 4, "F");
    doc.setFillColor(0, 33, 82);
    doc.roundedRect(x + 3, y + 3, wMain - 6, h - 6, 3, 3, "F");
    doc.setFillColor(0, 22, 58);
    doc.roundedRect(splitX + 2, y + 3, wStub - 5, h - 6, 3, 3, "F");

    doc.setDrawColor(167, 187, 228);
    doc.setLineDashPattern([1, 2], 0);
    doc.line(splitX, y + 5, splitX, y + h - 5);
    doc.setLineDashPattern([], 0);
    doc.setFillColor(241, 244, 250);
    doc.circle(splitX, y, 4, "F");
    doc.circle(splitX, y + h, 4, "F");

    doc.setFillColor(245, 199, 76);
    for (let i = 0; i < 25; i += 1) {
      doc.circle(x + 7 + i * 7.2, y + 7, 0.7, "F");
      doc.circle(x + 7 + i * 7.2, y + h - 7, 0.7, "F");
    }

    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.text("ADMIT ONE", x + 9, y + 13);
    doc.text(`RESERVA: ${reservationId}`, x + 128, y + 13);
    doc.setTextColor(245, 199, 76);
    doc.setFontSize(27);
    doc.text(BRAND_NAME, x + 9, y + 31);
    doc.setTextColor(193, 212, 248);
    doc.setFontSize(12);
    doc.text("ESTILO CINBEPOLIS - FACTURA TICKET", x + 9, y + 39);

    doc.setFillColor(6, 54, 126);
    doc.roundedRect(x + 9, y + 46, 105, 42, 2, 2, "F");
    doc.setTextColor(245, 199, 76);
    doc.setFontSize(9);
    doc.text("PELICULA", x + 13, y + 54);
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(13);
    const movieLines = doc.splitTextToSize((r.movie.title || "").toUpperCase(), 97);
    doc.text(movieLines, x + 13, y + 63);
    doc.setTextColor(203, 219, 251);
    doc.setFontSize(9);
    doc.text(`Categoria: ${(r.movie.category || "").slice(0, 34)}`, x + 13, y + 80);

    const infoX = x + 119;
    const infoY = y + 46;
    const infoW = 78;
    const rowH = 9.5;
    doc.setFillColor(6, 54, 126);
    doc.roundedRect(infoX, infoY, infoW, rowH * 6 + 2, 2, 2, "F");
    doc.setDrawColor(245, 199, 76);
    doc.rect(infoX, infoY, infoW, rowH * 6 + 2);
    const ticketInfo = [
      ["FECHA", dateStr],
      ["HORA", r.movie.schedule || timeStr],
      ["SALA", "2"],
      ["FILA", rowCode],
      ["ASIENTO", seatCode],
      ["BOLETO", `${idx + 1}/${r.seats.length}`]
    ];
    ticketInfo.forEach(([k, v], i) => {
      const yy = infoY + 2 + i * rowH;
      if (i > 0) {
        doc.setDrawColor(35, 89, 171);
        doc.line(infoX + 1.5, yy, infoX + infoW - 1.5, yy);
      }
      doc.setTextColor(245, 199, 76);
      doc.setFontSize(8.3);
      doc.text(k, infoX + 4, yy + 6);
      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.text(String(v), infoX + 32, yy + 6);
    });

    const tableX = x + 9;
    const tableY = y + 95;
    const tableW = 188;
    const tableH = 64;
    doc.setFillColor(5, 48, 114);
    doc.roundedRect(tableX, tableY, tableW, tableH, 2, 2, "F");
    doc.setDrawColor(129, 169, 230);
    doc.rect(tableX, tableY, tableW, tableH);
    doc.line(tableX, tableY + 11, tableX + tableW, tableY + 11);
    doc.line(tableX + 108, tableY, tableX + 108, tableY + tableH);
    doc.line(tableX + 137, tableY, tableX + 137, tableY + tableH);
    doc.line(tableX + 159, tableY, tableX + 159, tableY + tableH);

    doc.setTextColor(245, 199, 76);
    doc.setFontSize(8.2);
    doc.text("DESCRIPCION", tableX + 3, tableY + 8);
    doc.text("CANT", tableX + 114, tableY + 8);
    doc.text("P/U", tableX + 141, tableY + 8);
    doc.text("TOTAL", tableX + 164, tableY + 8);

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.text(`Entrada cine - ${(r.movie.title || "").slice(0, 34)}`, tableX + 3, tableY + 20);
    doc.text("1", tableX + 117, tableY + 20);
    doc.text(formatGTQ(perSeatTicketGTQ), tableX + 139, tableY + 20);
    doc.text(formatGTQ(perSeatTicketGTQ), tableX + 163, tableY + 20);

    if (perSeatSnackGTQ > 0) {
      doc.text("Dulceria (prorrateada)", tableX + 3, tableY + 29);
      doc.text("1", tableX + 117, tableY + 29);
      doc.text(formatGTQ(perSeatSnackGTQ), tableX + 139, tableY + 29);
      doc.text(formatGTQ(perSeatSnackGTQ), tableX + 163, tableY + 29);
    }

    doc.setTextColor(203, 219, 251);
    doc.setFontSize(8.2);
    const snackNames = r.snacks?.length ? r.snacks.map((s) => `${s.name} x${s.qty}`).join(", ") : "Sin dulceria";
    doc.text(`Asiento: ${seat}`, tableX + 3, tableY + 38);
    doc.text(`Dulceria: ${snackNames.slice(0, 58)}`, tableX + 3, tableY + 47);
    doc.text(`Cliente: ${r.customerName.slice(0, 58)}`, tableX + 3, tableY + 56);
    doc.text(`Correo: ${r.customerEmail.slice(0, 58)}`, tableX + 3, tableY + 63);

    doc.setDrawColor(129, 169, 230);
    doc.line(tableX + 108, tableY + 54, tableX + tableW, tableY + 54);
    doc.setTextColor(245, 199, 76);
    doc.setFont("helvetica", "bold");
    doc.text("TOTAL GTQ", tableX + 141, tableY + 61);
    doc.text(formatGTQ(perSeatTotalGTQ), tableX + 163, tableY + 61);
    doc.text("TOTAL USD", tableX + 141, tableY + 69);
    doc.text(formatUSD(perSeatTotalGTQ / FX_USD), tableX + 163, tableY + 69);

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(BRAND_NAME.slice(0, 10), splitX + 9, y + 13);
    doc.text("PREMIUM", splitX + 9, y + 20);
    doc.setTextColor(245, 199, 76);
    doc.setFontSize(8.5);
    doc.text("DETALLE RAPIDO", splitX + 9, y + 28);

    doc.setFillColor(7, 61, 143);
    doc.roundedRect(splitX + 8, y + 32, 58, 44, 2, 2, "F");
    const quickInfo = [
      ["ID", reservationId],
      ["Fecha", dateStr],
      ["Hora", timeStr],
      ["Asiento", seat]
    ];
    quickInfo.forEach(([k, v], i) => {
      const yy = y + 39 + i * 9;
      doc.setTextColor(245, 199, 76);
      doc.setFontSize(8);
      doc.text(k, splitX + 11, yy);
      doc.setTextColor(255, 255, 255);
      doc.text(String(v).slice(0, 31), splitX + 24, yy);
    });

    doc.setFillColor(7, 61, 143);
    doc.roundedRect(splitX + 8, y + 81, 58, 70, 2, 2, "F");
    doc.setTextColor(245, 199, 76);
    doc.setFontSize(8.5);
    doc.text("CODIGO", splitX + 11, y + 89);
    const barX = splitX + 11;
    const barY = y + 95;
    const barH = 34;
    for (let i = 0; i < barcode.length; i += 1) {
      const n = Number(barcode[i]);
      const bw = n % 2 === 0 ? 1 : 0.45;
      doc.setFillColor(255, 255, 255);
      doc.rect(barX + i * 1.1, barY, bw, barH, "F");
    }
    doc.setTextColor(214, 227, 255);
    doc.setFontSize(7.5);
    doc.text(barcode, splitX + 11, y + 136);
    doc.text("Valido para 1 ingreso", splitX + 11, y + 145);

    doc.setTextColor(208, 223, 255);
    doc.setFontSize(8);
    doc.text("Gracias por elegirnos", x + 10, y + h - 10);
    doc.text("Presentar ticket en entrada", x + 74, y + h - 10);
  });

  const safeName = r.customerName.replace(/[^\w\-]+/g, "_");
  doc.save(`factura_ticket_${safeName}.pdf`);
}

function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  dom.themeToggle.textContent = theme === "dark" ? "Modo claro" : "Modo oscuro";
}

function initTheme() {
  const stored = localStorage.getItem("theme");
  const theme = stored || "light";
  applyTheme(theme);
}

function setupEvents() {
  dom.movieSelect.addEventListener("change", (event) => {
    const previousMovieId = state.movieId;
    const hasProgress =
      state.selectedSeats.size > 0 ||
      Object.values(state.snackQty).some((qty) => qty > 0) ||
      !!dom.customerName.value.trim() ||
      !!dom.customerEmail.value.trim() ||
      !!dom.cardNumber.value.trim() ||
      !!dom.cardDate.value.trim() ||
      !!dom.cardCvv.value.trim();

    const applyMovieChange = () => {
      state.movieId = event.target.value;
      resetPurchaseFlow();
      renderMoviePreview();
      if (window.Swal && hasProgress) {
        Swal.fire({
          icon: "info",
          title: "Proceso reiniciado",
          text: "Se limpio tu seleccion anterior. Vuelve a elegir asientos para esta pelicula."
        });
      }
    };

    if (window.Swal && hasProgress) {
      Swal.fire({
        title: "Cambiar pelicula?",
        text: "Se reiniciara el proceso actual de compra.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, cambiar",
        cancelButtonText: "No, mantener"
      }).then((result) => {
        if (result.isConfirmed) {
          applyMovieChange();
        } else {
          state.movieId = previousMovieId;
          dom.movieSelect.value = previousMovieId;
        }
      });
      return;
    }

    const hadSeats = state.selectedSeats.size > 0;
    applyMovieChange();
    if (hadSeats && window.Swal) {
      Swal.fire({
        icon: "info",
        title: "Cambio de pelicula",
        text: "Debes volver a seleccionar asientos para esta funcion."
      });
    }
  });

  dom.paymentForm.addEventListener("submit", processPayment);
  dom.cancelForm.addEventListener("submit", cancelReservation);
  dom.pdfBtn.addEventListener("click", generatePdfInvoice);

  dom.themeToggle.addEventListener("click", () => {
    const next = document.body.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
  });

  dom.cardNumber.addEventListener("input", () => {
    const digits = dom.cardNumber.value.replace(/\D/g, "").slice(0, 16);
    dom.cardNumber.value = digits.replace(/(\d{4})(?=\d)/g, "$1 ");
  });

  dom.cardDate.addEventListener("input", () => {
    const digits = dom.cardDate.value.replace(/\D/g, "").slice(0, 4);
    if (digits.length <= 2) {
      dom.cardDate.value = digits;
      return;
    }
    dom.cardDate.value = `${digits.slice(0, 2)}/${digits.slice(2)}`;
  });

  dom.cardCvv.addEventListener("input", () => {
    dom.cardCvv.value = dom.cardCvv.value.replace(/\D/g, "").slice(0, 4);
  });

  [dom.comboList, dom.snackList].forEach((container) => {
    container.addEventListener("click", (event) => {
      const target = event.target.closest(".qty-btn");
      if (!target) return;
      const itemId = target.dataset.id;
      const action = target.dataset.action;
      changeSnackQty(itemId, action === "plus" ? 1 : -1);
    });
  });

  dom.snackToggle.addEventListener("change", () => {
    if (!state.selectedSeats.size) {
      dom.snackToggle.checked = false;
      state.snacksEnabled = false;
      return;
    }
    state.snacksEnabled = dom.snackToggle.checked;
    if (!state.snacksEnabled) state.snackQty = {};
    renderSnackCatalog();
    updateTotals();
  });
}

function init() {
  initTheme();
  loadMoviePosters();
  buildMovieOptions();
  renderMoviePreview();
  renderSeats();
  state.snacksEnabled = false;
  dom.snackToggle.checked = false;
  dom.snackToggle.disabled = true;
  renderSnackCatalog();
  updateTotals();
  updateReservationState();
  setupEvents();
}

init();
